// Abstract Collection
var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");

// now using request

/**
 * A collection class for use of holding and retrieving models
 * @constructor Collection
 * @example var collection = new Collection();
 */
var Collection = function() {
};
/**
 * @property secure {boolean} Secure (SSL) for use in the Collection's fetch method
 * @memberof Collection
 */
Collection.prototype.secure = false;
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
  return this.host + ":" + String(this.port) + this.path + Utils.formatQuery(this.query);
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

  if (options.host) {
    this.host = options.host;
  }
  if (options.port) {
    this.port = options.port;
  }
  if (options.path) {
    this.path = options.path;
  }
  if (options.query) {
    this.query = options.query;
  }

  // add any request options defined globally in node
  if (global_request_options && global_request_options.agentOptions) {
    options.agentOptions = global_request_options.agentOptions;
  }

  if (!success) {
    success = function(status, data) {
      Logger.debug("Fetched Data! " + status);
    }
  }
  if (!error) {
    error = function(e) {
      Logger.warn("Failed to fetched Data! " + e);
    }
  }

  const uri = options.host + ":" + String(options.port) + options.path + Utils.formatQuery(options.query);
  Logger.debug("uri " + uri);

  options.url = uri;

  this.secure = (uri.indexOf("https") !== -1);

  let req = request.get(options, function (err, res, body) {

    let status = 200;

    if (err) {
      Logger.warn("Exception " + err);
      status = 500;
    } else {
      status = (res && res.statusCode) ? res.statusCode : 200;
      Logger.debug("STATUS: " + status);

      let data = {};
      try {
        data = JSON.parse(body);
      } catch(e) {
        status = 500;
        error(e);
        return;
        // TODO: we need to do something with bad server responses that are not expected or formatted correctly
      }
      this.attributes = data;
      success(status, data);
    }
  });

  req.on("error", function(e) {
    Logger.debug("Error handler " + e);
    let data = {};
    try {
      if (typeof e === "object") {
        data = JSON.stringify(e);
      } else {
        data = e;
      }
    } catch(ex) {
      Logger.warn("Exception: " + ex);
      data = {};
    }
    Logger.warn("Exception " + JSON.stringify(data));
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
