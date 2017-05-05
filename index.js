var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
    Handlebars = require("handlebars");
var hb = require("express-handlebars");

const CONSTANTS = require("./constants.js");
var helpers = require("./server/serverHelpers.js");
var Logger = require("./utility/logger.js");
var logger = new Logger();

var app = express();

// For enabling view caching vs compile and render again
app.enable("view cache");

var options = {
  dotfiles: "ignore",
  extensions: ["htm", "html"],
  index: false
};

app.engine("handlebars", hb({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Serve up public static files
app.use(express.static(path.join(__dirname, "public"), options ));

// Allow parsing json and url
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


/* UI Requests */

// template versions
app.get("/directory-search.html", helpers.getDirectorySearch);
app.post("/directory-search.html", helpers.postDirectorySearch);

/* REST API */
app.get("/", helpers.getHome);
app.get("/about", helpers.getAbout);

// Fire up server and print friendly message to console
app.listen(CONSTANTS.EE_PORT, function () {
  logger.log("Provider Directory Experience EndPoint listening on port " + CONSTANTS.EE_PORT);
});
