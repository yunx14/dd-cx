const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");
var Model = require("../models/model.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");

module.exports = {
  errorInvalidZip: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_INVALID_ZIP);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.invalidAddress,
      {
        "title": "Provider Directory Invalid Zip Code",
        "stylesheets": [{ "stylesheet": "../styles/style.css" }]
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorNoResults: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.noResults,
      {
        "title": "Provider Directory No Results",
        "stylesheets": [{ "stylesheet": "../styles/style.css" }]
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorTimeOut: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.serverTimeout,
      {
        "title": "Provider Directory Server Timeout",
        "stylesheets": [{ "stylesheet": "../styles/style.css" }]
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorDown: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_DOWN);

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError.errorMessages.servicesDown,
      {
        "title": "Provider Directory Server is Down",
        "stylesheets": [{ "stylesheet": "../styles/style.css" }]
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  }
};
