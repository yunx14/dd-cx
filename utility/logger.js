var Utils = require("./utils.js");
const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("debug", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", message);
    logger.log(Utils.formatTimestamp());
    logger.log("------------------------");
  },
  error: function(message) {
    logger.log("error", message);
    logger.log(Utils.formatTimestamp());
    logger.log("------------------------");
  },
  debug: function(message) {
    logger.log("debug", message);
    logger.log(Utils.formatTimestamp());
    logger.log("------------------------");
  },
  info: function(message) {
    logger.log("info", message);
    logger.log(Utils.formatTimestamp());
    logger.log("------------------------");
  },
  warn: function(message) {
    logger.log("warn", message);
    logger.log(Utils.formatTimestamp());
    logger.log("------------------------");
  }
};
