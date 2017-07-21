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
    if (name && array) {
      if (Array.isArray(array)) {
        var formatQuery = "", i = 0, l = array.length;
        for (i = 0; i < l; i++) {
          formatQuery = formatQuery + name + "=" + array[i] + "&";
        }
      } else {
        return name + "=" + array;
      }
     return formatQuery.slice(0, -1);
    } else if (name) {
     return name + "=";
    }
    return "";
  },
  formatDistance: function(distance) {
    if (distance < 0.1) {
      return "<0.1";
    }
    return distance;
  },
  formatNetwork: function(network) {
    var formattedNetwork = [];
    if (network) {
      if (Array.isArray(network) && network.length === 1) {
        if (network[0].networkId === "2PPO") {
          formattedNetwork.push("PPO");
        }
        if (network[0].networkId === "2PREMIER") {
          formattedNetwork.push("Premier");
        }
        if (network[0].networkId === "2DELTACARE") {
          formattedNetwork.push("Deltacare USA");
        }
        return formattedNetwork.join("") + " " + "network";
      } else if (Array.isArray(network) && network.length >= 1) {
        for (var i = 0; i < network.length; i++) {
          if (network[i].networkId === "2PPO") {
            formattedNetwork.push("PPO");
          }
          if (network[i].networkId === "2PREMIER") {
            formattedNetwork.push("Premier");
          }
          if (network[i].networkId === "2DELTACARE") {
            formattedNetwork.push("Deltacare USA");
          }
        }
        return formattedNetwork.join(", ").slice(0, -2) + "networks";
      }
    } else {
      return "";
    }
  },
  formatData: function(data) {
    var formattedData = data;
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        formattedData[i].distance = this.formatDistance(data[i].distance);
        formattedData[i].providerNetworks = this.formatNetwork(data[i].providerNetworks);
      }
    } else if (typeof data === "object" && data && typeof data !== "function" && !Array.isArray(data)) {
      this.formatDistance(data.distance);
    }
    return formattedData;
  },
  transformNetworkLegacy: function(network) {
    if (network && !Array.isArray(network) && network === "ppo") {
      return "01";
    } else if (network && !Array.isArray(network) && network === "premier") {
      return "20";
    } else if (network && !Array.isArray(network) && network === "deltacare") {
      return "30";
    }
    return "any";
  }
};
