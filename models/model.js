// abstract model
var http = require("http");
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
 * @memberof Collection
 */
Model.prototype.query = {};
/**
 * @method getURI returns the formatted URI from local properties
 * @returns {string} URI of the model for use in REST calls
 * @memberof Model
 */
Model.prototype.getURI = function() {
  return this.host + ":" + String(this.port) + this.path;
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

  var uri = options.host + ":" + String(options.port) + options.path;
  var req = http.get(uri, function(res) {
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
        error(e);
      }
    });
  });

  req.on("error", function(e) {
    error(e);
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
