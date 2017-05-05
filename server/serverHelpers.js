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
        res.status(code).send(providersPresenter.render(data));
      },
      function(e) {
        // error
        logger.log("ERROR: Failed to request providers: " + e.message);
        res.status(500).send(e);
      }
    );
  },
  "getHome": function(req, res) {
    logger.log("GET / -> ABOUT");
    res.render("about");
  },
  "getAbout": function(req, res) {
    logger.log("GET /ABOUT");
    res.send(CONSTANTS.EE_ABOUT);
  }
}

var parseLocation = function(location) {
  var arrayLocation = location.split(",");
  var result = {};
  result.lat = Number(arrayLocation[0]);
  result.long = Number(arrayLocation[1]);
  return result;
};
