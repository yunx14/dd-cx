const CONSTANTS = require("../constants.js");
var yelp = require('yelp-fusion');

module.exports = {
  handleYelpID: function(promiseData) {
    var clientId = CONSTANTS.YELP_API.CLIENT_ID;
    var clientSecret = CONSTANTS.YELP_API.CLIENT_SECRET;
    return new Promise(function(resolve, reject) {
      yelp.accessToken(clientId, clientSecret)
      .then(function(response) {
        console.log("yelp access token is ", response.jsonBody.access_token);
        resolve(promiseData);
      })
      .catch(function(e) {
        console.log("getting an error from yelp", e);
        reject(promiseData);
      })
    });
  },
  handleReviewRating: function(promiseData) {
    return new Promise(function(resolve, reject) {
      resolve(promiseData);
    });
  };
};
