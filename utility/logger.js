var Utils = require("./utils.js");
const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("debug", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", message);
    logger.log(Utils.formatTimestamp());
  },
  error: function(message) {
    logger.log("error", message);
    logger.log(Utils.formatTimestamp());
  },
  debug: function(message) {
    logger.log("debug", message);
    logger.log(Utils.formatTimestamp());
  },
  info: function(message) {
    logger.log("info", message);
    logger.log(Utils.formatTimestamp());
  },
  warn: function(message) {
    logger.log("warn", message);
    logger.log(Utils.formatTimestamp());
  }
};
