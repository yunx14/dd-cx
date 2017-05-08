// Abstract Collection
var http = require("http");
var Logger = require("../utility/logger.js");

var logger = new Logger();

/**
 * A collection class for use of holding and retrieving models
 * @constructor Collection
 * @example var collection = new Collection();
 */
var Collection = function() {
};

/**
 * @property host {string} host for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.host = "";
/**
 * @property path {string} path for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.path = "";
/**
 * @property port {number} port for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.port = 0;
/**
 * @property attributes {object} The data of the Collection
 * @memberof Collection
 */
Collection.prototype.attributes = {};
/**
 * @property query {object} The query params for use in REST calls
 * @memberof Collection
 */
Collection.prototype.query = {};
/**
 * @method getURI returns the formatted URI from local properties
 * @returns {string} URI of the model for use in REST calls
 * @memberof Collection
 */
Collection.prototype.getURI = function() {
  return this.host + ":" + String(this.port) + this.path;
};
var formatQuery = function(query) {
  console.log(new Date().getTime());
  var formatQuery = "?", i = 0, keys = Object.keys(query), l = keys.length;
  for (i = 0; i < l; i++) {
    if (typeof query[keys[i]] !== "function" && Array.isArray(query[keys[i]])) {
      var tempVal = query[keys[i]];
      // var result = "";
      // for (var j = 0; j < tempVal.length; j++) {
      //   result = result + String(keys[i]) + "=" + tempVal[j] + "&";
      // }
      // formatQuery = formatQuery + result;

      formatQuery = formatQuery + String(keys[i]) + "=" + tempVal.join("&" + String(keys[i]) + "=") + "&";
    } else if (typeof query[keys[i]] !== "function") {
      formatQuery = formatQuery + String(keys[i]) + "=" + String(query[keys[i]]) + "&";
    }
  }
  console.log(new Date().getTime());
  return formatQuery.slice(0, -1);
};
/**
 * @method fetch Fetches data from a remove URI and populates this collection
 * @param options {object} Options to pass to the remove call
 * @param success {function} Success ballback
 * @param error {function} Error callback
 * @memberof Collection
 */
Collection.prototype.fetch = function(options, success, error) {
  if (!options) {
    options = {};
  }
  if (!options.host) {
    options.host = this.host;
  }
  if (!options.port) {
    options.port = this.port;
  }
  if (!options.path) {
    options.path = this.path;
  }
  if (!options.query) {
    options.query = this.query;
  }

  logger.log("Query " + JSON.stringify(options.query));
  if (!success) {
    success = function(status, data) {
      logger.log("Fetched Data! " + status);
    }
  }
  if (!error) {
    error = function(e) {
      logger.log("Failed to fetched Data! " + e);
    }
  }

  const uri = options.host + ":" + String(options.port) + options.path + formatQuery(options.query);
  logger.log("uri " + uri);
  var req = http.get(uri, function(res) {
    logger.log("STATUS: " + res.statusCode);

    if (res.statusCode > 399) {
      error(res.statusCode, res);
    } else {
      // Buffer the body entirely for processing as a whole.
      var buffer = "";
      res.on("data", function(chunk) {
        buffer += chunk;
      }).on("end", function() {
        try {
          var data = JSON.parse(buffer);
          this.attributes = data;
          success(res.statusCode, data);
        } catch(e) {
          error(500, e);
        }
      });
    }
  });

  req.on("error", function(e) {
    error(500, e);
  });
};

/**
 * @method toString Returns a string representation of the data
 * @returns {string} string representation of the data
 * @memberof Collection
 */
Collection.prototype.toString = function() {
  return JSON.stringify(this.attributes);
};

/**
 * @method index Returns a model at a specified index
 * @param i {number} The index of the model
 * @returns {any} a model at a specified index
 * @memberof Collection
 */
Collection.prototype.index = function(i) {
  return (i) ? this.attributes[i] : null;
};

/**
 * @method toJSON Returns a JSON representation of the data
 * @returns {object} JSON representation of the data
 * @memberof Collection
 */
Collection.prototype.toJSON = function() {
  return this.attributes;
};

/**
 * @method reset resets the collection data
 * @param data {array} The data to set(optional)
 * @memberof Collection
 */
Collection.prototype.reset = function(data) {
  if (data) {
    this.attributes = data;
  } else {
    this.attributes = {};
  }
};

module.exports = Collection;
