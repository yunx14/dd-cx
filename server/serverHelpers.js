const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var Model = require("../models/model.js");
var AtomicPower = require("../views/atomicPower.js");
var MainTemplate = require("../views/pds.js");
var ViewModel = require("../views/viewModel.js");

var SolrCollection = require("../collections/solrCollection.js");
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
        "pages-directorySearch",
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
        CONSTANTS.MAIN_PRESENTER_TEMPLATE
      );
      res.status(200).send(directorySearchPresenter.render());
    }
  },
  postDirectorySearch: function(req, res) {
    logger.log("POST " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    var query = parseLocation(req.body.location);
    if (req.body.distance) {
      query.distance = Number(req.body.distance);
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
      var lat = req.query.lat;
      var long = req.query.long;

      var provider = new Model();
      if (req.query) {
        logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS.SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS.SEARCH_SERVICE_PORT;
      provider.path = "/providers/" + id + Utils.formatQuery({"lat": lat, "long": long});

      var providerPresenter = new MainPresenter(
        "pages-providerDetails",
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
        CONSTANTS.MAIN_PRESENTER_TEMPLATE
      );

      provider.fetch({},
        function(code, data) {
          // success
          providerPresenter.mergePropertyMap(data);
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
  },
  errorInvalidZip: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_INVALID_ZIP);
    var ErrorViewModel = require("../views/errorMessage.js");

    var errorPresenter = new MainPresenter(
      "errorMessage",
      ErrorViewModel.errorMessages.invalidAddress,
      {},
      CONSTANTS.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorNoResults: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);
    var ErrorViewModel = require("../views/errorMessage.js");

    var errorPresenter = new MainPresenter(
      "errorMessage",
      ErrorViewModel.errorMessages.noResults,
      {},
      CONSTANTS.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorTimeOut: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);
    var ErrorViewModel = require("../views/errorMessage.js");

    var errorPresenter = new MainPresenter(
      "errorMessage",
      ErrorViewModel.errorMessages.serverTimeout,
      {},
      CONSTANTS.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorDown: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_DOWN);
    var ErrorViewModel = require("../views/errorMessage.js");

    var errorPresenter = new MainPresenter(
      "errorMessage",
      ErrorViewModel.errorMessages.servicesDown,
      {},
      CONSTANTS.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  getHome: function(req, res) {
    logger.log("GET / -> ABOUT");
    res.render("about");
  },
  getAbout: function(req, res) {
    logger.log("GET /ABOUT");
    var about = new MainPresenter(
      "about",
      {},
      { "ee-port": CONSTANTS.EE_PORT, "search-service-host": CONSTANTS.SEARCH_SERVICE_HOST + ":" + CONSTANTS.SEARCH_SERVICE_PORT},
      CONSTANTS.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(about.render());
    //res.send(CONSTANTS.EE_ABOUT);
  }
};

var parseLocation = function(location) {
  var arrayLocation = location.split(",");
  var result = {};
  result.lat = Number(arrayLocation[0]);
  result.long = Number(arrayLocation[1]);
  return result;
};

var getListsResults = function(query, req, res) {
  var providers = new SolrCollection("providers");
  providers.host = CONSTANTS.SEARCH_SERVICE_HOST;
  providers.port = CONSTANTS.SEARCH_SERVICE_PORT;
  providers.path = "/providers";
  providers.query = query;

  var providersPresenter = new MainPresenter(
    "pages-directorySearchResults",
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
    CONSTANTS.MAIN_PRESENTER_TEMPLATE
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
