const cluster = require("cluster");
const Utils = require("./utils.js");
const CONSTANTS = require("../constants.js"),
      Logger = require("filelogger"),
      logger = new Logger("debug", "debug", CONSTANTS.SERVER_LOG_PATH);

module.exports = {
  log: function(message) {
    logger.log("info", `[${Utils.formatTimestamp()}] [${cluster.worker.id}] ${message}`);
  },
  error: function(message) {
    logger.log("error", `[${Utils.formatTimestamp()}] [${cluster.worker.id}] ${message}`);
  },
  debug: function(message) {
    logger.log("debug", `[${Utils.formatTimestamp()}] [${cluster.worker.id}] ${message}`);
  },
  info: function(message) {
    logger.log("info", `[${Utils.formatTimestamp()}] [${cluster.worker.id}] ${message}`);
  },
  warn: function(message) {
    logger.log("warn", `[${Utils.formatTimestamp()}] [${cluster.worker.id}] ${message}`);
  }
};
