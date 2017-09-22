const CONSTANTS = require("../constants.js");
var MainPresenter = require("../views/mainPresenter.js");
var SolrCollection = require("../collections/solrCollection.js");

var MainTemplate = require("../views/pds.js");
var AtomicPower = require("../views/atomicPower.js");
var ViewModel = require("../views/viewModel.js");

var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");
var NetworkPersistLogic = require("../utility/networkPersistLogic.js");
var SpecialtyPersistLogic = require("../utility/specialtyPersistLogic.js");
var LanguagePersistLogic = require("../utility/languagePersistLogic.js");
var LocationPersistLogic = require("../utility/locationPersistLogic.js");
var LatlongPersistLogic = require("../utility/latlongPersistLogic.js");
var DistancePersistLogic = require("../utility/distancePersistLogic.js");
var FreeTextInputPersistLogic = require("../utility/freeTextInputPersistLogic.js");

var PaginationControl = require("../components/paginationControl.js");
var NodeGeocoder = require('node-geocoder');

module.exports = {
  getDirectorySearch: function(req, res) {
    Logger.log("GET " + CONSTANTS.DIRECTORY_SEARCH_PAGE);
    if (req.query && req.query.lat && req.query.long) {
      Logger.log("query " + JSON.stringify(req.query));

      if (String(Number(req.query.lat)) !== "NaN" && String(Number(req.query.long)) !== "NaN") {
        getListsResults(req.query, req, res);
      } else {
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }

    } else {
      Logger.log("Here is empty search page");
      const query = req.query;

      var googleAPI = "";
      if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
        googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
      } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
        googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
      }

      var directorySearchPresenter = new MainPresenter(
        CONSTANTS.TEMPLATES.SEARCH,
        ViewModel.pages_directorySearch,
        {
          "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
          "facilityDetailsPage": CONSTANTS.FACILITY_DETAILS_PAGE,
          "officeDetailsPage": CONSTANTS.OFFICE_DETAILS_PAGE,
          "title": "Provider Directory Search",
          "stylesheets": [
            { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
            { "stylesheet": "//cloud.typography.com/6549574/670548/css/fonts.css" }
          ],
          "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
          "scripts": [
            {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "ga-analytics.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "handlebars.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
            {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "autosuggestion.js"},
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
          },
          "updateDatabase": CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_LAST_UPDATED
        },
        CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
      );
      res.status(200).send(directorySearchPresenter.render());
    }
  },
  postDirectorySearch: function(req, res) {
    Logger.log("POST " + CONSTANTS.DIRECTORY_SEARCH_PAGE);

    var geocoder = null;
    if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API_KEY) {
      var options = {
        provider: "google",
        httpAdapter: "https",
        apiKey: CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.SERVER.APIKEY,
        clientId: CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.SERVER.CLIENTID,
        formatter: null
      };
      geocoder = NodeGeocoder(options);
    } else {
      geocoder = NodeGeocoder();
    }

    var query = {};
    if (req.body) {
      query = req.body;
    }
    if (!req.body.location && !req.body.lat && !req.body.long) {
      res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      return;
    }

    if (req.body.location) {
	    Logger.log("We will server-side geolocate");
      try {
        geocoder.geocode(req.body.location, function(err, response) {
          if (err) {
		        Logger.log("We got an error from geolocation " + err );
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
            return;
          } else if (!response || (Array.isArray(response) && response.length === 0)) {
		        Logger.log("no response from geolocator");
            res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
            return;
          } else {
            query.location = response[0].formattedAddress;
            query.lat = Number(response[0].latitude);
            query.long = Number(response[0].longitude);
            query.sourceNetwork = ""; // 2AMGEN
            query.targetNetwork = ""; // 2PPO

            if (query && query.lat && query.long) {
              // console.log("here is my query", query);

		          Logger.log("Redirectory to search page - " + Utils.formatQuery(query));
              res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
              return;
            }
          }
        });
      } catch (e) {
        Logger.log("geo error", e);
        res.redirect(CONSTANTS.ERROR_INVALID_ZIP);
      }
    } else {
      query.location = req.body.location;
      query.lat = Number(req.body.lat);
      query.long = Number(req.body.long);
      if (query && query.lat && query.long) {
	      Logger.log("redirectory to search - " + Utils.formatQuery(query));
        res.redirect(CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(query));
      }
    }
  },
};

var getListsResults = function(query, req, res) {
  var resultsList = new SolrCollection("providers");
  resultsList.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
  resultsList.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
  resultsList.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH;
  resultsList.query = query;

  var googleAPI = "";
  if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY && CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
    googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
  } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY) {
    googleAPI = `&key=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.APIKEY}`;
  } else if (CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID) {
    googleAPI = `&client=${CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_MAPS_API.UI.CLIENTID}`;
  }

  var resultsListPresenter = new MainPresenter(
    CONSTANTS.TEMPLATES.SEARCH_RESULTS,
    ViewModel.pages_directorySearchResults,
    {
      "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY,
      "providerDetailsPage": CONSTANTS.PROVIDER_DETAILS_PAGE,
      "facilityDetailsPage": CONSTANTS.FACILITY_DETAILS_PAGE,
      "officeDetailsPage": CONSTANTS.OFFICE_DETAILS_PAGE,
      "facilityId": query.facilityId,
      "searchQueryLocation": query.location,
      "searchQueryLat": query.lat,
      "searchQueryLong": query.long,
      "searchQueryDistance": query.distance,
      "searchQuerySpecialty": Utils.formatQueryParam(query.specialty),
      "searchQueryLanguage": query.language,
      "searchQueryFreeText": query.free_text,
      "searchQueryNetwork": Utils.formatQueryParam(query.network),
      "title": "Provider Directory Search Results",
      "stylesheets": [
        { "stylesheet": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "styles/style.css" },
        { "stylesheet": "//cloud.typography.com/6549574/670548/css/fonts.css" }
      ],
      "google-al": CONSTANTS[CONSTANTS.ENVIRONMENT].GOOGLE_AL,
      "scripts": [
        {"script": `https://maps.googleapis.com/maps/api/js?libraries=places${googleAPI}`},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "jquery.min.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "ga-analytics.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "main.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "handlebars.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "feedback.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "refine-search.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "filter-reset.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "banner.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "autosuggestion.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "helpers.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "spiderfy.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "map-cluster.js"},
        {"script": CONSTANTS[CONSTANTS.ENVIRONMENT].STATIC_PATH + "results-map.js"}
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
      },
      "updateDatabase": CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_LAST_UPDATED
    },
    CONSTANTS.TEMPLATES.MAIN_PRESENTER_TEMPLATE
  );

  if (query.page) {
    resultsList.currentPage = query.page;
  }

  var promiseData = {
    res: res,
    code: 200,
    presenter: resultsListPresenter,
    collection: resultsList
  };

  var handleResultsList = function(promiseData) {
    return new Promise(function(resolve, reject) {
      resultsList.fetch({},
        function(code, data) {
          // success
          if (resultsList.isEmpty()) {
            promiseData.res.redirect(CONSTANTS.ERROR_NO_RESULTS);
          } else {
            var baseURI = CONSTANTS.DIRECTORY_SEARCH_PAGE + Utils.formatQuery(resultsList.query);
            // network, specialty, language persistence
            promiseData.presenter.propertyMap.filter = ViewModel.pages_directorySearchResults.filter;
            promiseData.presenter.propertyMap.filter.network = NetworkPersistLogic.returnNetworkFormFields(query.network);
            promiseData.presenter.propertyMap.filter.specialty = SpecialtyPersistLogic.returnSpecialtyFormFields(query.specialty);
            promiseData.presenter.propertyMap.filter.language = LanguagePersistLogic.returnLanguageFormFields(query.language);
            // location persistence
            promiseData.presenter.propertyMap.searchInput = ViewModel.pages_directorySearchResults.searchInput;
            promiseData.presenter.propertyMap.searchInput = LocationPersistLogic.returnLocationFormFields(query.location);
            // lat long persistence
            promiseData.presenter.propertyMap.hiddenFields = ViewModel.pages_directorySearchResults.hiddenFields;
            promiseData.presenter.propertyMap.hiddenFields = LatlongPersistLogic.returnLatlongFormFields(query.lat, query.long);
            // distance persistence
            promiseData.presenter.propertyMap.distanceSelect = ViewModel.pages_directorySearchResults.distanceSelect;
            promiseData.presenter.propertyMap.distanceSelect = DistancePersistLogic.returnDistanceFormFields(query.distance);
            // freeTextInput persistence
            promiseData.presenter.propertyMap.freeTextInput = ViewModel.pages_directorySearchResults.freeTextInput;
            promiseData.presenter.propertyMap.freeTextInput = FreeTextInputPersistLogic.returnFreeTextInputFormFields(query.free_text);
            // pagination support
            promiseData.presenter.propertyMap.total = resultsList.total;
            promiseData.presenter.propertyMap.totalPages = resultsList.totalPages;
            promiseData.presenter.propertyMap.pageSize = resultsList.pageSize;
            promiseData.presenter.propertyMap.currentPage = resultsList.currentPage;
            promiseData.presenter.propertyMap.paginationList = PaginationControl.render(baseURI, resultsList.currentPage, resultsList.totalPages, "Prev", "Next", resultsList.paginationConfiguration.currentPageParam);

            var formattedData = Utils.formatData(resultsList.toJSON());
            promiseData.presenter.propertyMap.currentProviders = JSON.stringify(formattedData);
            promiseData.formattedData = formattedData;
          }
          resolve(promiseData);
        },
        function(code, data) {
          // error
          promiseData.code = code;
          Logger.log("ERROR: Failed to request resultsList: " + code);
          if (promiseData.code === 504) {
            promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_TIMEOUT);
          } else if (code === 400) {
            promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
          } else if (code === 500) {
            promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_DOWN);
          } else {
            promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_NO_RESULTS);
          }
          reject(promiseData);
        }
      );
    });
  };

  var render = function(promiseData) {
    return new Promise(function(resolve, reject) {
      promiseData.res.status(promiseData.code).send(promiseData.presenter.render(promiseData.formattedData));
      resolve(promiseData);
    });
  };

  var handleResultsListViews = function(promiseData) {
    return Promise.resolve(promiseData)
    .then(handleResultsList)
    .then(render)
    .catch(function(promiseData) {
      return Promise.reject(promiseData);
    });
  };

  handleResultsListViews(promiseData)
  .catch(function(promiseData) {
    if (promiseData.code === 504) {
      promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_TIMEOUT);
    } else if (promiseData.code === 400) {
      promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_INVALID_ZIP);
    } else {
      promiseData.res.status(promiseData.code).redirect(CONSTANTS.ERROR_DOWN);
    }
  });
}
