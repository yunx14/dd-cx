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

    var googleAPI = "";
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    }

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError,
      {
        "title": "Provider Directory Invalid Zip Code",
        "stylesheets": [
          { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
          { "stylesheet": "http://cloud.typography.com/6549574/670548/css/fonts.css" }
        ],
        "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
        "scripts": [
          {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
        ],
        "severity": ViewModel.pages_directoryError.errorMessages.invalidAddress.severity,
        "header": ViewModel.pages_directoryError.errorMessages.invalidAddress.header,
        "message": ViewModel.pages_directoryError.errorMessages.invalidAddress.message
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorNoResults: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_NO_RESULTS);

    var googleAPI = "";
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    }

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError,
      {
        "title": "Provider Directory No Results",
        "stylesheets": [
          { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
          { "stylesheet": "http://cloud.typography.com/6549574/670548/css/fonts.css" }
        ],
        "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
        "scripts": [
          {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
        ],
        "severity": ViewModel.pages_directoryError.errorMessages.noResults.severity,
        "header": ViewModel.pages_directoryError.errorMessages.noResults.header,
        "message": ViewModel.pages_directoryError.errorMessages.noResults.message
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorTimeOut: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_TIMEOUT);

    var googleAPI = "";
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    }

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError,
      {
        "title": "Provider Directory Server Timeout",
        "stylesheets": [
          { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
          { "stylesheet": "http://cloud.typography.com/6549574/670548/css/fonts.css" }
        ],
        "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
        "scripts": [
          {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
        ],
        "severity": ViewModel.pages_directoryError.errorMessages.serverTimeout.severity,
        "header": ViewModel.pages_directoryError.errorMessages.serverTimeout.header,
        "message": ViewModel.pages_directoryError.errorMessages.serverTimeout.message
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  },
  errorDown: function(req, res) {
    Logger.log("GET " + CONSTANTS.ERROR_DOWN);

    var googleAPI = "";
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
      googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
    } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
      googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
    }

    var errorPresenter = new MainPresenter(
      "pages-directoryError",
      ViewModel.pages_directoryError,
      {
        "title": "Provider Directory Server is Down",
        "stylesheets": [
          { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
          { "stylesheet": "http://cloud.typography.com/6549574/670548/css/fonts.css" }
        ],
        "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
        "scripts": [
          {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "ga-analytics.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "autosuggestion.js"},
          {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
        ],
        "severity": ViewModel.pages_directoryError.errorMessages.servicesDown.severity,
        "header": ViewModel.pages_directoryError.errorMessages.servicesDown.header,
        "message": ViewModel.pages_directoryError.errorMessages.servicesDown.message
      },
      CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
    );
    res.status(200).send(errorPresenter.render());
  }
};
