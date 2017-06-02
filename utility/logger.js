var Logger = require("filelogger"),
    logger = new Logger("info", "debug", "/var/log/provider-directory.log");

module.exports = {
  "log": function(message) {
    logger.log("info", message);
  },
  "error": function(message) {
    logger.log("error", message);
  },
  "debug": function(message) {
    logger.log("debug", message);
  },
  "info": function(message) {
    logger.info("info", message);
  },
  "warn": function(message) {
    logger.info("warn", message);
  }
};
