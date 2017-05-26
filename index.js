var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var https = require("https");
    Handlebars = require("handlebars");

const CONSTANTS = require("./constants.js");
    CONSTANTS.ENVIRONMENT = (process.env.NODE_ENV) ? process.env.NODE_ENV : "dev";
var mainHelpers = require("./server/mainHelpers.js");
var errorHelpers = require("./server/errorHelpers.js");
var testHelpers = require("./server/testHelpers.js");
var Logger = require("./utility/logger.js");
var logger = new Logger();

//patch partials
Handlebars.partials = Handlebars.templates;

var app = express();

// For enabling view caching vs compile and render again
app.enable("view cache");

var options = {
  dotfiles: "ignore",
  extensions: ["htm", "html"],
  index: false
};

//app.engine("handlebars", hb({defaultLayout: "main"}));
//app.set("view engine", "handlebars");

// Serve up public static files
app.use(express.static(path.join(__dirname, CONSTANTS.PUBLIC_DIRECTORY), options));

// Allow parsing json and url
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/* UI Requests */

// template versions
app.get(CONSTANTS.DIRECTORY_SEARCH_PAGE, mainHelpers.getDirectorySearch);
app.post(CONSTANTS.DIRECTORY_SEARCH_PAGE, mainHelpers.postDirectorySearch);
app.get(CONSTANTS.PROVIDER_DETAILS_PAGE, mainHelpers.getProviderDetails);

// error template
app.get(CONSTANTS.ERROR_INVALID_ZIP, errorHelpers.errorInvalidZip);
app.get(CONSTANTS.ERROR_NO_RESULTS, errorHelpers.errorNoResults);
app.get(CONSTANTS.ERROR_TIMEOUT, errorHelpers.errorTimeOut);
app.get(CONSTANTS.ERROR_DOWN, errorHelpers.errorDown);

/* REST API */
app.get("/", testHelpers.getAbout);
app.get("/about", testHelpers.getAbout);

// Fire up servers and print friendly message to console
https.createServer(options, app).listen(CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT_SSL, function () {
  logger.log("(" + CONSTANTS.ENVIRONMENT + ") Provider Directory Experience EndPoint SSL listening on port " + CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT_SSL);
});
app.listen(CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT, function () {
  logger.log("(" + CONSTANTS.ENVIRONMENT + ") Provider Directory Experience EndPoint listening on port " + CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT);
});
