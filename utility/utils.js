/**
* A static utility class
* @class Utils
* @example Utils.formatQuery({ ... });
*/
module.exports = Utils = {
  /**
  * @method formatQuery formats query object to query string
  * @param query {object}
  * @memberof Utils
  * @returns {string} web standards query string
  */
  formatQuery: function(query) {
    var formatQuery = "?", i = 0, keys = Object.keys(query), l = keys.length;
    for (i = 0; i < l; i++) {
      if (typeof query[keys[i]] !== "function" && Array.isArray(query[keys[i]])) {
        var tempVal = query[keys[i]];
        // for loop method:
        // var result = "";
        // for (var j = 0; j < tempVal.length; j++) {
        //   result = result + String(keys[i]) + "=" + tempVal[j] + "&";
        // }
        // formatQuery = formatQuery + result;

        // array.join method:
        formatQuery = formatQuery + String(keys[i]) + "=" + tempVal.join("&" + String(keys[i]) + "=") + "&";
      } else if (typeof query[keys[i]] !== "function") {
        formatQuery = formatQuery + String(keys[i]) + "=" + String(query[keys[i]]) + "&";
      }
    }
    return formatQuery.slice(0, -1);
  },
  formatDistance: function(distance) {
    if (distance < 0.1) {
      distance = "<0.1";
    }
  },
  formatData: function(data) {
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        formatDistance(data[i].distance);
      }
    } else if (typeof data === "object" && data && typeof data !== "function" && !Array.isArray(data)) {
      formatDistance(data.distance);
    }
  }
}
