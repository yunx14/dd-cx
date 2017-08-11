var Utils = require("./utils.js");
const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("debug", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", message, Utils.formatTimestamp());
  },
  error: function(message) {
    logger.log("error", message, Utils.formatTimestamp());
  },
  debug: function(message) {
    logger.log("debug", message, Utils.formatTimestamp());
  },
  info: function(message) {
    logger.log("info", message, Utils.formatTimestamp());
  },
  warn: function(message) {
    logger.log("warn", message, Utils.formatTimestamp());
  }
};
