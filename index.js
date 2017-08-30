const CONSTANTS = require("./constants.js");
      CONSTANTS.ENVIRONMENT = (process.env.NODE_ENV) ? process.env.NODE_ENV : "dev";
var Logger = require("./utility/logger.js");

if (process.env.CONTROLLER_HOST_NAME &&
    process.env.CONTROLLER_HOST_PORT &&
    process.env.ACCOUNT_NAME &&
    process.env.ACCOUNT_ACCESS_KEY &&
    process.env.APPLICATION_NAME &&
    process.env.TIER_NAME &&
    process.env.NODE_NAME
) {
  // Configure APPD
  Logger.log("AppD is configured");
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.controllerHostName = process.env.CONTROLLER_HOST_NAME;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.controllerPort = process.env.CONTROLLER_HOST_PORT;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.accountName = process.env.ACCOUNT_NAME;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.accountAccessKey = process.env.ACCOUNT_ACCESS_KEY;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.applicationName = process.env.APPLICATION_NAME;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.tierName = process.env.TIER_NAME;
  CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.nodeName = process.env.NODE_NAME;

  require("appdynamics").profile({
    controllerHostName: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.controllerHostName,
    controllerPort: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.controllerPort,
    controllerSslEnabled: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.controllerSslEnabled,  // Set to true if controllerPort is SSL
    accountName: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.accountName,
    accountAccessKey: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.accountAccessKey, //required
    applicationName: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.applicationName,
    tierName: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.tierName,
    nodeName: CONSTANTS[CONSTANTS.ENVIRONMENT].APPD.nodeName,
  });
} else {
  Logger.log("AppD is not configured, no environment variables.");
}

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var https = require("https");
var fs = require("fs");
    Handlebars = require("handlebars");
var request = require('request');

var directorySearchHelpers = require("./server/directorySearchHelpers.js");
var providerDetailsHelpers = require("./server/providerDetailsHelpers.js");
var facilityDetailsHelpers = require("./server/facilityDetailsHelpers.js");
var officeDetailsHelpers = require("./server/officeDetailsHelpers.js");
var inaccurateHelpers = require("./server/inaccurateHelpers.js");
var errorHelpers = require("./server/errorHelpers.js");
var testHelpers = require("./server/testHelpers.js");

//patch partials
Handlebars.partials = Handlebars.templates;
var app = express();
var privatekey = null;
var cert = null;
global.global_request_options = {};

try {
  privatekey = fs.readFileSync(CONSTANTS.PRIVATE_KEY);
  cert = fs.readFileSync(CONSTANTS.CERT);
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

// template versions - has side effects

app.get([
  CONSTANTS.BASE_URI + "/providers",
  CONSTANTS.BASE_URI + "/providers/:city",
  CONSTANTS.BASE_URI + "/providers/:city/offices",
  CONSTANTS.BASE_URI + "/providers/:city/offices/:name",
  CONSTANTS.BASE_URI + "/facilities",
  CONSTANTS.BASE_URI + "/offices",
  CONSTANTS.BASE_URI + "/offices/:name"],
  directorySearchHelpers.getDirectorySearch);


app.get(CONSTANTS.BASE_URI, directorySearchHelpers.getDirectorySearch);
app.get(CONSTANTS.DIRECTORY_SEARCH_PAGE, directorySearchHelpers.getDirectorySearch);
app.post(CONSTANTS.DIRECTORY_SEARCH_PAGE, directorySearchHelpers.postDirectorySearch);
app.get(CONSTANTS.PROVIDER_DETAILS_PAGE, providerDetailsHelpers.getProviderDetails);
app.get([CONSTANTS.BASE_URI + "/facilities/:name",
        CONSTANTS.FACILITY_DETAILS_PAGE], facilityDetailsHelpers.getFacilityDetails);
app.get([CONSTANTS.BASE_URI + "/offices/:name",
        CONSTANTS.OFFICE_DETAILS_PAGE], officeDetailsHelpers.getOfficeDetails);
app.get(CONSTANTS.INACCURATE_PAGE, inaccurateHelpers.getInaccurate);

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


const requestPlatformInformation = () => {
  return new Promise( (resolve, reject) => {
    const about = new Model();
    about.host = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_HOST;
    about.port = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PORT;
    about.path = CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_PATH + "/about";

    about.fetch({},
      function(code, data) {
        // success
        if (data && data.hasOwnProperty("providerDirectoryLastUpdateDate")) {
          CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_LAST_UPDATED = data.providerDirectoryLastUpdateDate;
        }
        resolve();
      },
      function(code, data) {
        // error
        Logger.error("ERROR: Failed to request about information: " + code);
        reject();
      }
    );
  });
};

requestPlatformInformation()
.catch( () => {
  Logger.error("ERROR: Failed to request about information");
  CONSTANTS[CONSTANTS.ENVIRONMENT].SEARCH_SERVICE_LAST_UPDATED = "unknown";
});
