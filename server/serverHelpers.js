const CONSTANTS = require("../constants.js");
var Presenter = require("../views/presenter.js");
var Model = require("../models/model.js");
var AtomicPower = require("../views/atomicPower.js");

var SolrCollection = require("../collections/solrCollection.js");
var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var logger = new Logger();

module.exports = {
  getDirectorySearch: function(req, res) {
    logger.log("GET " + CONSTANTS.DIRECTORY_SEARCH_PAGE);
    var vm = require("../views/viewModel.js");

    if (req.query && req.query.lat && req.query.long) {
      logger.log("query " + JSON.stringify(req.query));
      getResults(req.query, req, res);
    } else {
      logger.log("There is no query, showing empty search page");
      var directorySearchPresenter = new Presenter(
        "directorySearch",
        vm,
        {}
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
    // getResults(query, req, res);
  },
  getProviderDetails: function(req, res) {
    logger.log("GET " + CONSTANTS.PROVIDER_DETAILS_PAGE);

    if (req.query && req.query.providerKey && req.query.lat && req.query.long) {
      var id = req.query.providerKey;
      var lat = req.query.lat;
      var long = req.query.long;
      var vm = {};//require("../views/viewModel.js");

      var provider = new Model();
      if (req.query) {
        logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS.SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS.SEARCH_SERVICE_PORT;
      provider.path = "/providers/" + id + Utils.formatQuery({"lat": lat, "long": long});

      var providerPresenter = new Presenter(
        "providerDetails",
        vm,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "lat": lat,
          "long": long
        });

      provider.fetch({},
        function(code, data) {
          // success
          providerPresenter.setPropertyMap(data);
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
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage",
      vm.errorMessages.invalidAddress,
      {});
      res.status(200).send(errorPresenter.render());
  },
  errorNoResults: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage",
      vm.errorMessages.noResults,
      {});
      res.status(200).send(errorPresenter.render());
  },
  errorTimeOut: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage",
      vm.errorMessages.serverTimeout,
      {});
      res.status(200).send(errorPresenter.render());
  },
  errorDown: function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_DOWN);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage",
      vm.errorMessages.servicesDown,
      {});
      res.status(200).send(errorPresenter.render());
  },
  getHome: function(req, res) {
    logger.log("GET / -> ABOUT");
    res.render("about");
  },
  getAbout: function(req, res) {
    logger.log("GET /ABOUT");
    var about = new Presenter(
      "about",
      {},
      { "ee-port": CONSTANTS.EE_PORT, "search-service-host": CONSTANTS.SEARCH_SERVICE_HOST + ":" + CONSTANTS.SEARCH_SERVICE_PORT});
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

var getResults = function(query, req, res) {
  var providers = new SolrCollection("providers");
  providers.host = CONSTANTS.SEARCH_SERVICE_HOST;
  providers.port = CONSTANTS.SEARCH_SERVICE_PORT;
  providers.path = "/providers";
  providers.query = query;

  var vm = require("../views/viewModel.js");
  var providersPresenter = new Presenter(
    "directorySearchResults",
    vm,
    {
      "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
      "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
      "lat": query.lat,
      "long": query.long,
      "distance": query.distance,
      "specialty": query.specialty
    }
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
