const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var logger = new Logger();

module.exports = {
  getDirectorySearch: function(req, res) {
    logger.log("GET " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    if (req.query && req.query.lat && req.query.long) {
      logger.log("query " + JSON.stringify(req.query));
      getListsResults(req.query, req, res);
    } else {
      logger.log("There is no query, showing empty search page");
      var directorySearchPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.SEARCH,
        ViewModel.pages_directorySearch,
        {
          "title": "Provider Directory Search",
          "stylesheet": "../styles/style.css",
          "scripts": [
            {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
            {"script": "jquery.min.js"},
            {"script": "main.js"},
            {"script": "geocoder.js"}
          ]
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );
      res.status(200).send(directorySearchPresenter.render());
    }
  },
  postDirectorySearch: function(req, res) {
    logger.log("POST " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    var query = {};
    if (req.body.distance) {
      query.distance = Number(req.body.distance);
    }
    if (req.body.latitude && req.body.longitude) {
      query.lat = Number(req.body.latitude);
      query.long = Number(req.body.longitude);
    }
    if (req.body.specialty) {
      query.specialty = req.body.specialty;
    }
    res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
    // getListsResults(query, req, res);
  },
  getProviderDetails: function(req, res) {
    logger.log("GET " + CONSTANTS.PROVIDER_DETAILS_PAGE);

    if (req.query && req.query.providerKey && req.query.lat && req.query.long) {
      var id = req.query.providerKey;
      var lat = Number(req.query.lat);
      var long = Number(req.query.long);

      var provider = new Model();
      if (req.query) {
        logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS.SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS.SEARCH_SERVICE_PORT;
      provider.path = "/providers/" + id + Utils.formatQuery({"lat": lat, "long": long});

      var providerPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.DETAILS,
        ViewModel.pages_providerDetails,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "lat": lat,
          "long": long,
          "title": "Provider Detail",
          "stylesheet": "../styles/style.css",
          "scripts": [
            {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
            {"script": "jquery.min.js"},
            {"script": "template3.js"}
          ]
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );

      provider.fetch({},
        function(code, data) {
          // success
          if (data) {
            providerPresenter.mergePropertyMap(data);
          }
          res.status(code).send(providerPresenter.render());
        },
        function(code, data) {
          // error
          logger.log("ERROR: Failed to request provider: " + code);
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
      logger.log("No params or bad provider Key " + JSON.stringify(req.params));
      res.status(400).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    }
  }
};

var getListsResults = function(query, req, res) {
  var providers = new SolrCollection("providers");
  providers.host = CONSTANTS.SEARCH_SERVICE_HOST;
  providers.port = CONSTANTS.SEARCH_SERVICE_PORT;
  providers.path = "/providers";
  providers.query = query;

  var providersPresenter = new MainPresenter(
    CONSTANTS.TEMPLATES.SEARCH_RESULTS,
    ViewModel.pages_directorySearchResults,
    {
      "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
      "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
      "lat": query.lat,
      "long": query.long,
      "distance": query.distance,
      "specialty": query.specialty,
      "title": "Provider Directory Search Results",
      "stylesheet": "../styles/style.css",
      "scripts": [
        {"script": "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwM4PtsUrx03bFU9UhqI44KwdXXqbiGJQ&libraries=places"},
        {"script": "jquery.min.js"},
        {"script": "main.js"},
        {"script": "geocoder.js"}
      ]
    },
    CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
  );

  providers.fetch({},
    function(code, data) {
      // success
      if (providers.isEmpty()) {
        res.redirect(CONSTANTS.ERROR_NO_RESULTS);
      } else {
        res.status(code).send(providersPresenter.render(data));
      }
    },
    function(code, data)  {
      // error
      logger.log("ERROR: Failed to request providers: " + code);
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
