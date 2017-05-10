const CONSTANTS = require("../constants.js");
var Presenter = require("../views/presenter.js");
var AtomicPower = require("../views/pds.js");
var SolrCollection = require("../collections/solrCollection.js");
var Logger = require("../utility/logger.js");
var logger = new Logger();

module.exports = {
  "getDirectorySearch": function(req, res) {
    logger.log("GET /directory-search.html");
    var vm = require("../views/provider-directory-search.js");

    var locationsView = new Presenter(
      "provider-directory-search", // name
      vm, // viewModel
      { "provider": "", "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map

      res.status(200).send(locationsView.render());
  },
  "postDirectorySearch": function(req, res) {
    logger.log("POST /directory-search.html");

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

    var providersPresenter = new Presenter(
      "provider-directory-search", // name
      vm, // viewModel
      { "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY, "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map

    var query = parseLocation(req.body.location);
    query.distance = Number(req.body.distance);
    query.specialty = req.body.specialty;
    providers.fetch({ "query": query },
      function(code, data) {
        // success
        if (providers.isEmpty()) {
          res.redirect(CONSTANTS.ERROR_NO_RESULTS);
        }
        res.status(code).send(providersPresenter.render(data));
      },
      function(code, data) {
        // error
        logger.log("ERROR: Failed to request providers: " + code);
        if (code === 504) {
          res.redirect(CONSTANTS.ERROR_TIMEOUT);
        } else if (code === 400) {
          res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
        } else {
          res.redirect(CONSTANTS.ERROR_DOWN);
        }
      }
    );
  },
  "errorInvalidZip": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_INVALID_ZIP);
    var vm = require("../views/provider-directory-search.js");

    var errorPresenter = new Presenter(
      "errorInvalidZip", // name
      vm, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorTimeOut": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);
    var vm = require("../views/provider-directory-search.js");

    var errorPresenter = new Presenter(
      "errorTimeOut", // name
      vm, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorNoResults": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);
    var vm = require("../views/provider-directory-search.js");

    var errorPresenter = new Presenter(
      "errorNoResults", // name
      vm, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "errorDown": function(req, res) {
    logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);
    var vm = require("../views/provider-directory-search.js");

    var errorPresenter = new Presenter(
      "errorDown", // name
      vm, // viewModel
      {}); // property map
      res.status(200).send(errorPresenter.render());
  },
  "getHome": function(req, res) {
    logger.log("GET / -> ABOUT");
    res.render("about");
  },
  "getAbout": function(req, res) {
    logger.log("GET /ABOUT");
    res.send(CONSTANTS.EE_ABOUT);
  }
};

var parseLocation = function(location) {
  var arrayLocation = location.split(",");
  var result = {};
  result.lat = Number(arrayLocation[0]);
  result.long = Number(arrayLocation[1]);
  return result;
};
