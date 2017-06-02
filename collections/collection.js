// Abstract Collection
var http = require("http");
var Utils = require("../utility/utils.js");

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
 * @property attributes {array} The data of the Collection
 * @memberof Collection
 */
Collection.prototype.attributes = [];
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

  //logger.log("Query " + JSON.stringify(options.query));
  if (!success) {
    success = function(status, data) {
      //logger.log("Fetched Data! " + status);
    }
  }
  if (!error) {
    error = function(e) {
      //logger.log("Failed to fetched Data! " + e);
    }
  }

  const uri = options.host + ":" + String(options.port) + options.path + Utils.formatQuery(options.query);
  //logger.log("uri " + uri);
  var req = http.get(uri, function(res) {
    var status = res.statusCode;
    //logger.log("STATUS: " + status);

    if (status > 399) {
      error(status, res);
    } else {
      // Buffer the body entirely for processing as a whole.
      var buffer = "";
      res.on("data", function(chunk) {
        buffer += chunk;
      }).on("end", function() {
        var data;
        try {
          data = JSON.parse(buffer);
        } catch(e) {
          //logger.log("Exception: " + e);
          data = {};
        }
        this.attributes = data;
        //logger.log("calling success");
        success(status, data);
      });
    }
  });

  req.on("error", function(e) {
    error(500, e);
  });
};

/**
 * @method isEmpty Returns true if collection is empty
 * @returns {boolean} true if empty
 * @memberof Collection
 */
Collection.prototype.isEmpty = function() {
  return this.attributes.length === 0;
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
    this.attributes = [];
  }
};

module.exports = Collection;
