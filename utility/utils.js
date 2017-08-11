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
  formatQueryParam: function(arrayOrStr) {
    if (typeof arrayOrStr === "string") {
      arrayOrStr = arrayOrStr.split(" ");
      return arrayOrStr;
    } else {
      return arrayOrStr;
    }
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
          formattedNetwork.push("DeltaCare USA");
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
            formattedNetwork.push("DeltaCare USA");
          }
        }
        return formattedNetwork.join(", ") + " " + "networks";
      }
    } else {
      return "";
    }
  },
  formatAvailability: function(network) {
    var formattedAvailability = {};
    if (network) {
      if (Array.isArray(network) && network.length === 1) {
        if (network[0].networkId === "2PPO") {
          if (network[0].acceptsNewPatients === "Y") {
            formattedAvailability.icon = "icon-check-circle";
            formattedAvailability.text = "Accepting new patients";
          } else if (network[0].acceptsNewPatients === "N") {
            formattedAvailability.icon = "icon-warning",
            formattedAvailability.text = "Not accepting new patients";
          }
        }
        if (network[0].networkId === "2PREMIER") {
          if (network[0].acceptsNewPatients === "Y") {
            formattedAvailability.icon = "icon-check-circle";
            formattedAvailability.text = "Accepting new patients";
          } else if (network[0].acceptsNewPatients === "N") {
            formattedAvailability.icon = "icon-warning",
            formattedAvailability.text = "Not accepting new patients";
          }
        }
        if (network[0].networkId === "2DELTACARE") {
          if (network[0].acceptsNewPatients === "Y") {
            formattedAvailability.icon = "icon-check-circle";
            formattedAvailability.text = "Accepting new patients";
          } else if (network[0].acceptsNewPatients === "N") {
            formattedAvailability.icon = "icon-warning",
            formattedAvailability.text = "Not accepting new patients";
          }
        }
        return formattedAvailability;
      } else if (Array.isArray(network) && network.length > 1) {
        var counterY = 0;
        var AcceptNetwork = [];
        for (var i = 0; i < network.length; i++) {
          if (network[i].networkId === "2PPO" && network[i].acceptsNewPatients === "Y") {
            counterY += 1;
            AcceptNetwork.push("PPO");
          }
          if (network[i].networkId === "2PREMIER" && network[i].acceptsNewPatients === "Y") {
            counterY += 1;
            AcceptNetwork.push("Premier");
          }
          if (network[i].networkId === "2DELTACARE" && network[i].acceptsNewPatients === "Y") {
            counterY += 1;
            AcceptNetwork.push("DeltaCare USA");
          }
        }

        if ( counterY !== 0 && (network.length === counterY) ) {
          formattedAvailability.icon = "icon-check-circle";
          formattedAvailability.text = "Accepting new patients";
        } else if (counterY > 0 && (network.length > counterY)) {
          var tempText = "Accepting new patients (";
          for (var i = 0; i < AcceptNetwork.length; i++) {
            tempText = tempText + AcceptNetwork[i] + ", ";
          }
          formattedAvailability.icon = "icon-check-circle";
          formattedAvailability.text = tempText.slice(0, -2) + " only)";
        } else {
          formattedAvailability.icon = "icon-warning",
          formattedAvailability.text = "Not accepting new patients";
        }
        return formattedAvailability;
      }
    } else {
      return formattedAvailability;
    }
  },
  formatData: function(data) {
    var formattedData = data;
    if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        formattedData[i].distance = this.formatDistance(data[i].distance);
        formattedData[i].availability = this.formatAvailability(data[i].providerNetworks);
        formattedData[i].providerNetworks = this.formatNetwork(data[i].providerNetworks);
      }
    } else if (typeof data === "object" && data && typeof data !== "function" && !Array.isArray(data)) {
      this.formatDistance(data.distance);
    }
    return formattedData;
  },
  transformNetworkLegacy: function(network) {
    if (network && !Array.isArray(network) && network === "ppo") {
      return "20";
    } else if (network && !Array.isArray(network) && network === "premier") {
      return "01";
    } else if (network && !Array.isArray(network) && network === "deltacare") {
      return "30";
    }
    return "any";
  },
  formatTimestamp: function() {
    var now = new Date();
    // return this.pad("                      ",
    // now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds(),
    // false);
    return now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + ":" + now.getMilliseconds();
  },
  // pad: function(pad, str, padLeft) {
  //   if (typeof str === 'undefined'){
  //     return pad;
  //   }
  //   if (padLeft) {
  //     return (pad + str).slice(-pad.length);
  //   } else {
  //     return (str + pad).substring(0, pad.length);
  //   }
  // }
};
