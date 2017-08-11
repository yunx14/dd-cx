var Utils = require("./utils.js");
const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("debug", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", "[" + Utils.formatTimestamp() + "]  " + message);
  },
  error: function(message) {
    logger.log("error", "[" + Utils.formatTimestamp() + "]  " + message);
  },
  debug: function(message) {
    logger.log("debug", "[" + Utils.formatTimestamp() + "]  " + message);
  },
  info: function(message) {
    logger.log("info", "[" + Utils.formatTimestamp() + "]  " + message);
  },
  warn: function(message) {
    logger.log("warn", "[" + Utils.formatTimestamp() + "]  " + message);
  }
};
