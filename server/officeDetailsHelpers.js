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
  getOfficeDetails: function(req, res) {
    Logger.log("GET " + CONSTANTS.OFFICE_DETAILS_PAGE);

    if (req.query && req.query.lat && req.query.long && req.query.location && req.query.practiceLocationNumber) {
      var searchQueryWithPracticeLocationNumber = query = {
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance),
        practiceLocationNumber: req.query.practiceLocationNumber
      };

      var searchQueryWithoutPracticeLocationNumber = {
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance)
      };

      var office = new Model();
      if (req.query) {
        req.query.free_text = req.query.keyword;
        req.query.keyword = null;
        Logger.log("query " + JSON.stringify(req.query));
        office.query = req.query;
      }

      office.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
      office.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
      office.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/locations/" + searchQueryWithPracticeLocationNumber.practiceLocationNumber;

      var googleAPI = "";
      if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      }

      var officePresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.OFFICE_DETAILS,
        ViewModel.pages_officeDetails,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
          "facilityDetailsPage": CONSTANTS.FACILITY_DETAILS_PAGE,
          "searchResultsLink": `${CONSTANTS.DIRECTORY_SEARCH_PAGE}${Utils.formatQuery(searchQueryWithoutPracticeLocationNumber)}`,
          "searchQueryLocation": req.query.location,
          "searchQueryLat": req.query.lat,
          "searchQueryLong": req.query.long,
          "searchQueryDistance": req.query.distance,
          "searchQuerySpecialty": Utils.formatQueryParam(req.query.specialty),
          "searchQueryLanguage": req.query.language,
          "searchQueryFreeText": req.query.free_text,
          "searchQueryNetwork": Utils.formatQueryParam(req.query.network),
          "title": "Facility Detail",
          "stylesheets": [
            { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
            { "stylesheet": "//cloud.typography.com/6549574/670548/css/fonts.css" }
          ],
          "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
          "scripts": [
            {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "template3.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"}
          ],
          "banner": {
            text: "Return to the old dentist search?",
            button: {
              anchorLink: {
                href: CONSTANTS[CONSTANTS.ENVIRONMENT].OLD_DIRECTORY_HOST + "/find-a-dentist?" + ((query.location) ? "d_loc=" + query.location : "") + ((query.network) ? "&d_net=" + Utils.transformNetworkLegacy(query.network) : "") + ((query.free_text) ? "&d_kw=" + query.free_text : "") + "&d_d=" + ((query.distance) ? query.distance : "15") + "&d_prg=delta&d_co=delta",
                text: "Go back",
                class:"button btn--primary inverted banner__button"
              }
            },
            close: {
              icon: {
                class: "icon-exit-inverted",
                ariaLabel: "close"
              }
            }
          }
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );

      var promiseData = {
        res: res,
        code: 200,
        presenter: officePresenter,
        model: office
      };

      var handleOffficeDetails = function(promiseData) {
        return new Promise(function(resolve, reject) {
          office.fetch({},
            function(code, data) {
              // success
              if (data) {
                if (data.hasOwnProperty("distance")) {
                  data.distance = Utils.formatDistance(data.distance);
                  data.availability = Utils.formatAvailability(data.providerNetworks);
                  data.transformedNetworks = Utils.formatNetwork(data.providerNetworks);
                }
                promiseData.presenter.mergePropertyMap(data);
              }
              resolve(promiseData);
            },
            function(code, data) {
              // error
              promiseData.code = code;
              Logger.warn("ERROR: Failed to request provider: " + promiseData.code);
              reject(promiseData);
            }
          );
        });
      };

      var render = function(promiseData) {
        return new Promise(function(resolve, reject) {
          promiseData.res.status(promiseData.code).send(promiseData.presenter.render());
          resolve(promiseData);
        });
      };

      var handleOfficeDetailViews = function(promiseData) {
        return Promise.resolve(promiseData)
        .then(handleOffficeDetails)
        .then(render)
        .catch(function(promiseData) {
          return Promise.reject(promiseData);
        });
      };

      handleOfficeDetailViews(promiseData)
      .catch(function(promiseData) {
        if (promiseData.code === 504) {
          promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_TIMEOUT);
        } else if (promiseData.code === 400) {
          promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
        } else {
          promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_DOWN);
        }
      });
    } else {
      // TODO: need generic bad request page
      Logger.log("No params or bad provider Key " + JSON.stringify(req.params));
      res.status(400).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    }
  }
};
