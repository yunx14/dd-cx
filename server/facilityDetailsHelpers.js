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
  getFacilityDetails: function(req, res) {
    Logger.log("GET " + CONSTANTS.FACILITY_DETAILS_PAGE);

    if (req.query && req.query.lat && req.query.long && req.query.location && req.query.facilityId) {
      var searchQueryWithKey = query = {
        providerKey: req.query.providerKey,
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance),
        facilityId: req.query.facilityId
      };

      var searchQueryWithoutKey = {
        lat: Number(req.query.lat),
        long: Number(req.query.long),
        location: req.query.location,
        free_text: req.query.free_text,
        network: req.query.network,
        specialty: req.query.specialty,
        language: req.query.language,
        distance: Number(req.query.distance)
      };

      var facility = new Model();
      if (req.query) {
        req.query.free_text = req.query.keyword;
        req.query.keyword = null;
        Logger.log("query " + JSON.stringify(req.query));
        facility.query = req.query;
      }

      facility.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
      facility.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
      facility.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/facilities/" + searchQueryWithKey.facilityId;

      var googleAPI = "";
      if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      }

      var facilityPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.FACILITY_DETAILS,
        ViewModel.pages_facilityDetails,
        {
          "directorySearchPage": CONSTANTS.DIRECTORY_SEARCH_PAGE,
          "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
          "officeDetailsPage": CONSTANTS.OFFICE_DETAILS_PAGE,
          "searchResultsLink": `${CONSTANTS.DIRECTORY_SEARCH_PAGE}${Utils.formatQuery(searchQueryWithoutKey)}`,
          "inaccurateInfoHref": `${CONSTANTS.INACCURATE_PAGE}${Utils.formatQuery(searchQueryWithKey)}`,
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

      facility.fetch({},
        function(code, data) {
          // success
          if (data) {
            if (data.hasOwnProperty("distance")) {
              data.distance = Utils.formatDistance(data.distance);
              data.availability = Utils.formatAvailability(data.providerNetworks);
              data.transformedNetworks = Utils.formatNetwork(data.providerNetworks);
            }
            facilityPresenter.mergePropertyMap(data);
          }
          res.status(code).send(facilityPresenter.render());
        },
        function(code, data) {
          // error
          Logger.warn("ERROR: Failed to request provider: " + code);
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
      Logger.log("No params or bad provider Key " + JSON.stringify(req.params));
      res.status(400).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    }
  }
};
