var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
    Handlebars = require("handlebars");
var hb = require("express-handlebars");

var View = require("./views/view.js");
var AtomicPower = require("./views/pds.js");
var Collection = require("./collections/collection.js");
var Logger = require("./utility/logger.js");

const PORT = 80,
      ABOUT = "This is the Directory Experience EndPoint.",
      SERVICE_HOST = "http://localhost",
      SERVICE_PORT = 8080;

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

app.use(express.static(path.join(__dirname, "public"), options ));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/* UI Requests */

// template versions

app.get("/directory-search.html", function(req, res) {
  logger.log("GET /directory-search.html");
  var vm = require("./views/provider-directory-search.js");

  var locationsView = new View(
    "provider-directory-search", // name
    vm, // viewModel
    { "provider": "", "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map

    res.status(200).send(locationsView.render());
});

app.post("/directory-search.html", function(req, res) {
  logger.log("POST /directory-search.html");

  var providers = new Collection();
  providers.host = SERVICE_HOST;
  providers.port = SERVICE_PORT;
  providers.path = "/providers";

  var vm = require("./views/provider-directory-search.js");

  var providersView = new View(
    "provider-directory-search", // name
    vm, // viewModel
    { "provider": "{{collection}}", "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map

  providers.fetch({},
    function(code, data) {
      // success
      res.status(code).send(providersView.render(data));
    },
    function(e) {
      // error
      logger.log("ERROR: Failed to request providers: " + e.message);
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

app.listen(PORT, function () {
  logger.log("Provider Directory Experience EndPoint listening on port " + PORT);
});
