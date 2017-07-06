var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var https = require("https");
var fs = require("fs");
    Handlebars = require("handlebars");
var request = require('request');

const CONSTANTS = require("./constants.js");
    CONSTANTS.ENVIRONMENT = (process.env.NODE_ENV) ? process.env.NODE_ENV : "dev";
var mainHelpers = require("./server/mainHelpers.js");
var errorHelpers = require("./server/errorHelpers.js");
var testHelpers = require("./server/testHelpers.js");
var Logger = require("./utility/logger.js");


//patch partials
Handlebars.partials = Handlebars.templates;

var app = express();

var privatekey = null;
var cert = null;
global.global_request_options = {};

try {
  privatekey = fs.readFileSync("/opt/docker/certs/node.key");
  cert = fs.readFileSync("/opt/docker/certs/node.cer");
  CONSTANTS.SSL_ENABLED = true;
  global.global_request_options = {
    agentOptions: {
        rejectUnauthorized: false,
        ca: cert
      }
  };
} catch (e) {
  Logger.warn("Could not read certs for https! " + e);
  CONSTANTS.SSL_ENABLED = false;
}

global.request = request;

// For enabling view caching vs compile and render again
app.enable("view cache");

//Disabled the 'x-powered-by: Express' Header for security reasons
app.disable('x-powered-by');

var options = {
  dotfiles: "ignore",
  extensions: ["htm", "html"],
  index: false
};

//app.engine("handlebars", hb({defaultLayout: "main"}));
//app.set("view engine", "handlebars");

// Serve up public static files
app.use("/", express.static(path.join(__dirname, CONSTANTS.PUBLIC_DIRECTORY), options));
app.use("/find-a-dentist/alpha", express.static(path.join(__dirname, CONSTANTS.PUBLIC_DIRECTORY), options));
app.use("/docs", express.static(path.join(__dirname, "jsdoc"), options));

// Allow parsing json and url
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* UI Requests */

// template versions

app.get("/find-a-dentist/alpha" + CONSTANTS.DIRECTORY_SEARCH_PAGE, mainHelpers.getDirectorySearch);
app.post("/find-a-dentist/alpha" + CONSTANTS.DIRECTORY_SEARCH_PAGE, mainHelpers.getDirectorySearch);

// map the new URIs
app.get("/find-a-dentist/alpha" + CONSTANTS.PROVIDER_DETAILS_PAGE, mainHelpers.getProviderDetails);

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

try {
  if (privatekey && cert) {
    CONSTANTS.SSL_ENABLED = true;

    // Fire up servers and print friendly message to console
    https.createServer({ "key": privatekey, "cert": cert }, app).listen(CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT_SSL, function () {
      Logger.log("(" + CONSTANTS.ENVIRONMENT + ") Provider Directory Experience EndPoint SSL listening on port " + CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT_SSL);
    });
  }
} catch (e) {
  Logger.warn("Could not read certs for https! " + e);
  CONSTANTS.SSL_ENABLED = false;
}

var server = app.listen(CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT, function () {
  Logger.log("(" + CONSTANTS.ENVIRONMENT + ") Provider Directory Experience EndPoint listening on port " + CONSTANTS[CONSTANTS.ENVIRONMENT].EE_PORT);
});

CONSTANTS[CONSTANTS.ENVIRONMENT].EE_HOST = server.address().address;
