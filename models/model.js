// abstract model
var Utils = require("../utility/utils.js");
var Logger = require("../utility/logger.js");

// now using request

/**
 *  A model class for use of holding and retrieving data
 * @constructor Model
 * @param attributes {object} attributes of the Model
 * @example var model = new Model({"name": Bubba", "id": 1});
 */
var Model = function(attributes) {
  /**
   * @property attributes {object} data of the model
   * @memberof Model
   */
   this.attributes = (attributes) ? attributes : {};
};

/**
 * @property secure {boolean} Secure (SSL) for use in the Model's fetch method
 * @memberof Model
 */
Model.prototype.secure = false;

/**
 * @property host {string} host for use in the model's fetch method
 * @memberof Model
 */
Model.prototype.host = "";
/**
 * @property path {string} path for use in the model's fetch method
 * @memberof Model
 */
Model.prototype.path = "";
/**
 * @property port {number} port for use in the model's fetch method
 * @memberof Model
 */
Model.prototype.port = 0;
/**
 * @property attributes {object} The data of the model
 * @memberof Model
 */
Model.prototype.attributes = {};
/**
 * @property query {object} The query params for use in REST calls
 * @memberof Model
 */
Model.prototype.query = {};
/**
 * @method getURI returns the formatted URI from local properties
 * @returns {string} URI of the model for use in REST calls
 * @memberof Model
 */
Model.prototype.getURI = function() {
  return this.host + ":" + String(this.port) + this.path + Utils.formatQuery(this.query);
};
 /**
  * @method fetch Fetches data from a remove URI and populates this model
  * @param options {object} Options to pass to the remove call
  * @param success {function} Success ballback
  * @param error {function} Error callback
  * @memberof Model
  */
  Model.prototype.fetch = function(options, success, error) {
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
          error(e);
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
 * @method toString Returns a string representation of the data
 * @returns {string} string representation of the data
 * @memberof Model
 */
Model.prototype.toString = function() {
  return JSON.stringify(this.attributes);
};
/**
 * @method toJSON Returns a JSON representation of the data
 * @returns {object} JSON representation of the data
 * @memberof Model
 */
Model.prototype.toJSON = function() {
  return this.attributes;
};
/**
 * @method get Returns a value for a key in the object
 * @param key {any} The key to return a property for
 * @returns {any} a value for a key in the object
 * @memberof Model
 */
Model.prototype.get = function(key) {
  return (key) ? this.attributes[key] : null;
};
/**
 * @method set Sets a value for a key in the object
 * @param key {any} The key to return a property for
 * @param value {any} a value for a key in the object
 * @memberof Model
 */
Model.prototype.set = function(key, value) {
  if (key && value) {
    this.attributes[key] = value;
  }
};

module.exports = Model;
