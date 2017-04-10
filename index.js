var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var hb = require("express-handlebars");
const PORT = 80,
      ABOUT = "This is a simple Locations EndPoint built on express.",
      SERVICE_HOST = "http://localhost",
      SERVICE_PORT = 8080;

// modules
var Locations = require("./locations.js");

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

app.get("/location-form", function(req, res) {
  res.render("location-form");
});

app.post("/location-form", function(req, res) {
  res.status(201).send("created");
});


app.get("/location-search.html", function(req, res) {
  res.render("location-search");
});

app.post("/location-search", function(req, res) {  
  res.status(201).send("Searching....");
});

/* REST API */

app.get("/", function(req, res) {
  console.log("GET / -> ABOUT");
  res.render("about");
});

app.get("/about", function(req, res) {
  console.log("GET /ABOUT");
  res.send(ABOUT);
});

app.get("/locations", function (req, res) {
  console.log("GET /locations");

  var locations = new Locations();
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
      console.log("ERROR: Failed to request locations: " + e.message);
      res.status(500).send(e);
    }
  );
});

app.listen(PORT, function () {
  console.log("Locations EndPoint listening on port " + PORT);
});
