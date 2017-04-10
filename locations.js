// Collection module
var http = require("http");

module.exports = function() {
  return {
    "host": "",
    "path": "/locations",
    "port": 8080,
    "attributes": {},
    "fetch": function(options, success, error) {
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

      if (!success) {
        success = function(status, data) {
          console.log("Fetched Data! " + status);
        }
      }
      if (!error) {
        error = function(e) {
          console.log("Failed to fetched Data! " + e);
        }
      }

      var uri = options.host + ":" + String(options.port) + options.path;
      console.log("uri " + uri);
      var req = http.get(uri, function(res) {
        console.log("STATUS: " + res.statusCode);
        // Buffer the body entirely for processing as a whole.
        var buffer = "";
        res.on("data", function(chunk) {
          buffer += chunk;
        }).on("end", function() {
          try {
            var data = JSON.parse(buffer);
            this.attributes = data;

            console.log("data " + JSON.stringify(data));
            success(res.statusCode, data);
          } catch(e) {
            error(e);
          }
        });
      });

      req.on("error", function(e) {
        error(e);
      });
    },
    "toString": function() {
      return JSON.stringify(this.attributes);
    }
  }
}
