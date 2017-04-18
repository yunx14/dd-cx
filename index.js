var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var hb = require("express-handlebars");
var View = require("./views/view.js");

var Logger = require("./utility/logger.js");

const PORT = 80,
      ABOUT = "This is the Directory Experience EndPoint.",
      SERVICE_HOST = "http://localhost",
      SERVICE_PORT = 8080,
      LOCATION_SEARCH_VIEW_ANCHOR = "location-search";

var logger = new Logger();

// modules
var Collection = require("./collections/collection.js");

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

app.use(express.static(path.join(__dirname, "public"), options ));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* UI Requests */

// template versions

app.get("/directory-search.html", function(req, res) {
  var vm = require("./views/provider-directory-search.js");

  var locationsView = new View(
    "provider-directory-search", // name
    vm, // viewModel
    { "provider": "", "btnTextPrimary": "Submit" }); // property map

    res.status(200).render(locationsView.getName(), locationsView.enrichData(vm));
});

app.post("/address_form", function(req, res) {
  logger.log("GET /locations");

  var locations = new Collection();
  locations.host = SERVICE_HOST;
  locations.port = SERVICE_PORT;
  locations.path = "/locations";

  var vm = require("./views/provider-directory-search.js");

  var locationsView = new View(
    "provider-directory-search", // name
    vm, // viewModel
    { "provider": "{{collection}}", "btnTextPrimary": "Submit" }); // property map

  locations.fetch({},
    function(code, data) {
      // success
      res.status(code).render(locationsView.getName(), locationsView.enrichData(data));
    },
    function(e) {
      // error
      logger.log("ERROR: Failed to request locations: " + e.message);
      res.status(500).send(e);
    }
  );
});

// test versions
app.get("/location-search.html", function(req, res) {
  res.render("location-search");
});

app.post("/location-search", function(req, res) {
  logger.log("GET /locations");

  var locations = new Collection();
  locations.host = SERVICE_HOST;
  locations.port = SERVICE_PORT;
  locations.path = "/locations";

  var locationsView = new View(
    "locations", // name
    { "locations": [], "title": ""}, // viewModel
    { "locations": "{{collection}}", "title": "Locations:" }); // property map

  locations.fetch({},
    function(code, data) {
      // success
      res.status(code).render(locationsView.getName(), locationsView.enrichData(data));
    },
    function(e) {
      // error
      logger.log("ERROR: Failed to request locations: " + e.message);
      res.status(500).send(e);
    }
  );
});

/* REST API */

app.get("/", function(req, res) {
  logger.log("GET / -> ABOUT");
  res.render("about");
});

app.get("/about", function(req, res) {
  logger.log("GET /ABOUT");
  res.send(ABOUT);
});

// Testing
/*
app.get("/locations", function(req, res) {
  logger.log("GET /locations");

  var locations = new Collection();
  locations.host = SERVICE_HOST;
  locations.port = SERVICE_PORT;
  locations.path = "/locations";

  locations.fetch({},
    function(code, data) {
      // success
      // Note, this is where any enrichment or transformation occur
      res.render("locations", {"locations": data, "title": "Locations:"});
    },
    function(e) {
      logger.log("ERROR: Failed to request locations: " + e.message);
      res.status(500).send(e);
    }
  );
});
*/

app.listen(PORT, function () {
  logger.log("Locations EndPoint listening on port " + PORT);
});
