const CONSTANTS = require("../constants.js");
var Model = require("../models/model.js");
var Logger = require("../utility/logger.js");

module.exports = {
  passThrough: function(req, res) {
    Logger.log("GET auto suggestions query", req.query.text);

    var suggestions = new Model();
    suggestions.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
    suggestions.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
    suggestions.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/suggestions?text=" + req.query.text;

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
              Logger.log("here are my suggested data", data);
              promiseData.res.status(promiseData.code).send(data);
            }
            resolve(promiseData);
          },
          function(code, data) {
            // error
            promiseData.code = code;
            Logger.warn("ERROR: Failed to request suggest error: " + promiseData.code);
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
      return Promise.reject(promiseData);
    });
  }
};
