const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("info", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", message);
  },
  error: function(message) {
    logger.log("error", message);
  },
  debug: function(message) {
    logger.log("debug", message);
  },
  info: function(message) {
    logger.log("info", message);
  },
  warn: function(message) {
    logger.log("warn", message);
  }
};
