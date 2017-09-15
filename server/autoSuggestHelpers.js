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
  passThrough: function(req, res) {
    Logger.log("GET auto suggestions");
    var auto_text = req.query.text;
    res.send(200, auto_text);

    var suggestions = new Model();
    suggestions.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
    suggestions.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
    suggestions.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/autosuggest?text=/" + req.query.text;

    var promiseData = {
        res: res,
        code: 200,
        model: suggestions
    };

    var handleSuggestions = function(promiseData) {
        return new Promise(function(resolve, reject) {
          suggestions.fetch({},
            function(code, data) {
              // success
              if (data) {
                res.send(200, data)
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

    var handleResults = function(promiseData) {
	    return Promise.resolve(promiseData)
	    .then(handleSuggestions)
	    .catch(function(promiseData) {
	      return Promise.reject(promiseData);
	    });
	};

	handleResults(promiseData)
      .catch(function(promiseData) {
        if (promiseData.code === 504) {
          promiseData.res.status(promiseData.code);
        } else if (promiseData.code === 400) {
          promiseData.res.status(promiseData.code);
        } else {
          promiseData.res.status(promiseData.code);
        }
    });

  }
};
