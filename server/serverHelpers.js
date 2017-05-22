const CONSTANTS = require("../constants.js");
var Presenter = require("../views/presenter.js");
var Model = require("../models/model.js");
var AtomicPower = require("../views/pds.js");
var AtomicPower2 = require("../views/atomicPower.js");


var SolrCollection = require("../collections/solrCollection.js");
var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var logger = new Logger();

module.exports = {
  "getHomepage": function(req, res) {
    var vm = require("../views/viewModel.js");

    var homepageView = new Presenter(
      "pages-homepage", // name
      vm.pages_homepage, // viewModel
      {}); // property map

      res.status(200).send(homepageView.render());
  },
  "getDirectorySearch": function(req, res) {
    logger.log("GET /directory-search.html");
    var vm = require("../views/provider-directory-search.js");

    var locationsView = new Presenter(
      "directorySearch", // name
      vm, // viewModel
      { "provider": "", "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map

      res.status(200).send(locationsView.render());
  },
  "postDirectorySearchResults": function(req, res) {
    logger.log("POST /directory-search-results.html");

    var providers = new SolrCollection("providers");
    if (req.query) {
      logger.log("query " + JSON.stringify(req.query));
      providers.query = req.query;
    }

    providers.host = CONSTANTS.SEARCH_SERVICE_HOST;
    providers.port = CONSTANTS.SEARCH_SERVICE_PORT;
    providers.path = "/providers";

  /* call the service tier vs SOLR directly
    var providers = new Collection();
    providers.host = CONSTANTS.APP_SERVICE_HOST;
    providers.port = CONSTANTS.APP_SERVICE_PORT;
    providers.path = "/providers";
  */
    var vm = require("../views/provider-directory-search.js");
    var query = parseLocation(req.body.location);

    var providersPresenter = new Presenter(
      "directorySearchResults", // name
      vm, // viewModel
      {
        "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
        "btnTextPrimary": "Submit",
        "btnTextFeedback":
        "Feedback",
        "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
        "lat": query.lat,
        "long": query.long
      }); // property map


    if (req.body.distance) {
      query.distance = Number(req.body.distance);
    }
    if (req.body.specialty) {
      query.specialty = req.body.specialty;
    }
    providers.fetch({ "query": query },
      function(code, data) {
        // success
        if (providers.isEmpty()) {
          res.redirect(CONSTANTS.ERROR_NO_RESULTS);
        } else {
          res.status(code).send(providersPresenter.render(data));
        }
      },
      function(code, data) {
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
  },
  "getProviderDetails": function(req, res) {
    logger.log("GET " + CONSTANTS.PROVIDER_DETAILS_PAGE);

    if (req.query && req.query.providerKey && req.query.lat && req.query.long) {
      var id = req.query.providerKey;
      var lat = req.query.lat;
      var long = req.query.long;
      var vm = {};//require("../views/provider-directory-search.js");

      var provider = new Model();
      if (req.query) {
        logger.log("query " + JSON.stringify(req.query));
        provider.query = req.query;
      }

      provider.host = CONSTANTS.SEARCH_SERVICE_HOST;
      provider.port = CONSTANTS.SEARCH_SERVICE_PORT;
      provider.path = "/providers/" + id + Utils.formatQuery({"lat": lat, "long": long});

      var providerPresenter = new Presenter(
        "providerDetails", // name
        vm, // viewModel
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "lat": lat,
          "long": long
        }); // property map

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
  "errorInvalidZip": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_INVALID_ZIP);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage", // name
      vm.errorMessages.invalidAddress, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorNoResults": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage", // name
      vm.errorMessages.noResults, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorTimeOut": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage", // name
      vm.errorMessages.serverTimeout, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorDown": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_DOWN);
    var vm = require("../views/errorMessage.js");

    var errorPresenter = new Presenter(
      "errorMessage", // name
      vm.errorMessages.servicesDown, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "getHome": function(req, res) {
    logger.log("GET / -> ABOUT");
    res.render("about");
  },
  "getAbout": function(req, res) {
    logger.log("GET /ABOUT");
    var about = new Presenter(
      "about", // name
      {}, // viewModel
      { "ee-port": CONSTANTS.EE_PORT, "search-service-host": CONSTANTS.SEARCH_SERVICE_HOST + ":" + CONSTANTS.SEARCH_SERVICE_PORT}); // property map
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
