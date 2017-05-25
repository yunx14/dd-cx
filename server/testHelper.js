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
