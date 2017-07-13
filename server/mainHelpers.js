const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var BusinessLogic = require("../utility/businessLogic.js");

var PaginationControl = require("../components/paginationControl.js");
var NodeGeocoder = require('node-geocoder');

module.exports = {
  getDirectorySearch: function(req, res) {
    Logger.log("GET " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    if (req.query && req.query.lat && req.query.long) {
      Logger.log("query " + JSON.stringify(req.query));
      var inputLat = req.query.lat;
      var inputLong = req.query.long;
      if (String(Number(inputLat)) !== "NaN" && String(Number(inputLong)) !== "NaN") {
        getListsResults(req.query, req, res);
      } else {
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }
    } else {
      Logger.log("There is no query, showing empty search page");
      var directorySearchPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.SEARCH,
        ViewModel.pages_directorySearch,
        {
          "title": "Provider Directory Search",
          "stylesheets": [{ "stylesheet": "./styles/style.css" }],
          "scripts": [
            {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
            {"script": "jquery.min.js"},
            {"script": "main.js"},
            {"script": "geocoder.js"},
            {"script": "feedback.js"}
          ]
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );
      res.status(200).send(directorySearchPresenter.render());
    }
  },
  postDirectorySearch: function(req, res) {


    Logger.log("POST " + CONSTANTS.DIRECTORY_SEARCH_PAGE);
    var geocoder = NodeGeocoder();
    var query = {};
    if (req.body) {
      query = req.body;
    }
    if (!req.body.location && !req.body.lat && !req.body.long) {
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
        return;
    }
    if (req.body.distance) {
      query.distance = Number(req.body.distance);
    }
    if (req.body.keyword) {
      query.free_text = req.body.keyword;
      query.keyword = null;
    }
    if (req.body.location) {
      try {
        geocoder.geocode(req.body.location, function(err, response) {
          if (err) {
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
          } else if (!response || (Array.isArray(response) && response.length === 0)) {
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
          } else {
            query.location = response[0].formattedAddress;
            query.lat = Number(response[0].latitude);
            query.long = Number(response[0].longitude);
            if (query && query.lat && query.long) {
              res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
            }
          }
        });
      } catch (e) {
        Logger.log("geo error", e);
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }
    } else {
      query.location = req.body.location;
      query.lat = Number(req.body.lat);
      query.long = Number(req.body.long);
      if (query && query.lat && query.long) {
        res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
      }
    }
  },
  getProviderDetails: function(req, res) {
    Logger.log("GET " + CONSTANTS.PROVIDER_DETAILS_PAGE);

    if (req.query && req.query.providerKey && req.query.lat && req.query.long && req.query.location) {
      var searchQueryWithKey = {
        providerKey: req.query.providerKey,
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance)
      };

      var searchQueryWithoutKey = {
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance)
      };

      var provider = new Model();
      if (req.query) {
        req.query.free_text = req.query.keyword;
        req.query.keyword = null;
        Logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
      provider.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/" + searchQueryWithKey.providerKey; //+ Utils.formatQuery(req.query);

      var providerPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.DETAILS,
        ViewModel.pages_providerDetails,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "searchResultsLink": `${CONSTANTS.DIRECTORY_SEARCH_PAGE}${Utils.formatQuery(searchQueryWithoutKey)}`,
          "inaccurateInfoHref": `${CONSTANTS.INACCURATE_PAGE}${Utils.formatQuery(searchQueryWithKey)}`,
          "title": "Provider Detail",
          "stylesheets": [{ "stylesheet": "./styles/style.css" }],
          "scripts": [
            {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
            {"script": "jquery.min.js"},
            {"script": "template3.js"},
            {"script": "feedback.js"}
          ]
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );

      provider.fetch({},
        function(code, data) {
          // success
          if (data) {
            if (data.hasOwnProperty("distance")) {
              data.distance = Utils.formatDistance(data.distance);
            }
            providerPresenter.mergePropertyMap(data);
          }
          res.status(code).send(providerPresenter.render());
        },
        function(code, data) {
          // error
          Logger.warn("ERROR: Failed to request provider: " + code);
          if (code === 504) {
            res.status(code).redirect(CONSTANTS.ERROR_TIMEOUT);
          } else if (code === 400) {
            res.status(code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
          } else {
            res.status(code).redirect(CONSTANTS.ERROR_DOWN);
          }
        }
      );
    } else {
      // TODO: need generic bad request page
      Logger.log("No params or bad provider Key " + JSON.stringify(req.params));
      res.status(400).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    }
  },
  getInaccurate: function(req, res) {
    Logger.log("GET " + CONSTANTS.INACCURATE_PAGE);

    if (req.query && req.query.providerKey && req.query.lat && req.query.long && req.query.location) {
      var searchQueryWithKey = {
        providerKey: req.query.providerKey,
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance)
      };

      var provider = new Model();
      if (req.query) {
        req.query.free_text = req.query.keyword;
        req.query.keyword = null;
        Logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
      provider.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/" + searchQueryWithKey.providerKey; //+ Utils.formatQuery(req.query);

      var providerPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.INACCURATE,
        ViewModel.pages_inaccurate,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
          "detailLink": `${CONSTANTS.PROVIDER_DETAILS_PAGE}${Utils.formatQuery(searchQueryWithKey)}`,
          "title": "inaccurate",
          "stylesheets": [{ "stylesheet": "./styles/style.css" }],
          "scripts": [
            {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
            {"script": "jquery.min.js"},
            {"script": "template3.js"},
            {"script": "feedback.js"}
          ]
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );

      provider.fetch({},
        function(code, data) {
          // success
          if (data) {
            if (data.hasOwnProperty("distance")) {
              data.distance = Utils.formatDistance(data.distance);
            }
            providerPresenter.mergePropertyMap(data);
          }
          res.status(code).send(providerPresenter.render());
        },
        function(code, data) {
          // error
          Logger.warn("ERROR: Failed to request provider: " + code);
          if (code === 504) {
            res.status(code).redirect(CONSTANTS.ERROR_TIMEOUT);
          } else if (code === 400) {
            res.status(code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
          } else {
            res.status(code).redirect(CONSTANTS.ERROR_DOWN);
          }
        }
      );
    } else {
      // TODO: need generic bad request page
      Logger.log("No params or bad provider Key " + JSON.stringify(req.params));
      res.status(400).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    }
  }
};

var getListsResults = function(query, req, res) {
  var providers = new SolrCollection("providers");
  providers.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
  providers.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
  providers.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH;
  providers.query = query;

  var searchQueryWithKey = {
    providerKey: req.query.providerKey,
    lat: Number(req.query.lat),
    long: Number(req.query.long),
    location: req.query.location,
    free_text: req.query.free_text,
    network: req.query.network,
    specialty: req.query.specialty,
    language: req.query.language,
    distance: Number(req.query.distance)
  };

  var providersPresenter = new MainPresenter(
    CONSTANTS.TEMPLATES.SEARCH_RESULTS,
    ViewModel.pages_directorySearchResults,
    {
      "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
      "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
      "searchQueryLocation": query.location,
      "searchQueryLat": query.lat,
      "searchQueryLong": query.long,
      "searchQueryDistance": query.distance,
      "searchQuerySpecialty": Utils.formatQueryParam("specialty", query.specialty),
      "searchQueryLanguage": query.language,
      "searchQueryFreeText": query.free_text,
      "searchQueryNetwork": Utils.formatQueryParam("network", query.network),
      "title": "Provider Directory Search Results",
      "stylesheets": [{ "stylesheet": "./styles/style.css" }],
      "scripts": [
        {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
        {"script": "jquery.min.js"},
        {"script": "main.js"},
        {"script": "geocoder.js"},
        {"script": "feedback.js"}
      ],
      "searchInput": {
        "field": {
          "id": "location",
          "value": query.location,
          "type": "text",
          "name": "location",
          "placeholder": "Zip code, city, or address",
          "label": {
            "text": "Near"
          }
        }
      },
      "hiddenFields": [
        {
          "field": {
            "id": "latitude",
            "type": "hidden",
            "name": "lat",
            "value": query.lat,
            "label": {
              "text": "latitude",
              "class": "hidden"
            }
          }
        },
        {
          "field": {
            "id": "longitude",
            "type": "hidden",
            "name": "long",
            "value": query.long,
            "label": {
              "text": "longitude",
              "class": "hidden"
            }
          }
        }
      ]
    },
    CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
  );
  if (query.page) {
    providers.currentPage = query.page;
  }
  providers.fetch({},
    function(code, data) {
      // success
      if (providers.isEmpty()) {
        res.redirect(CONSTANTS.ERROR_NO_RESULTS);
      } else {

        var baseURI = CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(providers.query);
        providersPresenter.propertyMap.total = providers.total;
        providersPresenter.propertyMap.totalPages = providers.totalPages;
        providersPresenter.propertyMap.pageSize = providers.pageSize;
        providersPresenter.propertyMap.currentPage = providers.currentPage;
        providersPresenter.propertyMap.filter = ViewModel.pages_directorySearchResults.filter;
        providersPresenter.propertyMap.filter.network = BusinessLogic.returnNetworkFormFields(query.network);
        providersPresenter.propertyMap.paginationList = PaginationControl.render(baseURI, providers.currentPage, providers.totalPages, "Prev", "Next", providers.paginationConfiguration.currentPageParam);

        var formattedData = Utils.formatData(providers.toJSON());
        res.status(code).send(providersPresenter.render(formattedData));
      }
    },
    function(code, data)  {
      // error
      Logger.log("ERROR: Failed to request providers: " + code);
      if (code === 504) {
        res.status(code).redirect(CONSTANTS.ERROR_TIMEOUT);
      } else if (code === 400) {
        res.status(code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
      } else {
        res.status(code).redirect(CONSTANTS.ERROR_DOWN);
      }
    }
  );
}
