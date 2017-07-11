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
    var formatQuery = "?", i = 0, keys = Object.keys(query), l = keys.length, tempVal;
    for (i = 0; i < l; i++) {
      tempVal = query[keys[i]];
      if (typeof query[keys[i]] !== "function" && Array.isArray(query[keys[i]])) {
        if (tempVal) {
          formatQuery = formatQuery + String(keys[i]) + "=" + tempVal.join("&" + String(keys[i]) + "=") + "&";
        }
      } else if (typeof query[keys[i]] !== "function") {
        if (tempVal) {
          formatQuery = formatQuery + String(keys[i]) + "=" + String(query[keys[i]]) + "&";
        }
      }
    }
    return formatQuery.slice(0, -1);
  },
  formatQueryParam: function(name, array) {
    console.log("utils, formatQueryParam", name, array);
    if (name && array) {
      var formatQuery = "", i = 0, l = array.length;
      for (i = 0; i < l; i++) {
        formatQuery = formatQuery + name + "=" + array[i] + "&";
      }
     return formatQuery.slice(0, -1);
    }
    return "";
  },
  formatDistance: function(distance) {
    if (distance < 0.1) {
      return "<0.1";
    }
    return distance;
  },
  formatData: function(data) {
    var formattedData = data;
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        formattedData[i].distance = this.formatDistance(data[i].distance);
      }
    } else if (typeof data === "object" && data && typeof data !== "function" && !Array.isArray(data)) {
      this.formatDistance(data.distance);
    }
    return formattedData;
  }
};
