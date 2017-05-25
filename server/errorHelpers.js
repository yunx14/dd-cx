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
  }
};
