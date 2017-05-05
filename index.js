var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
    Handlebars = require("handlebars");
var hb = require("express-handlebars");

// var Presenter = require("./views/presenter.js");
// var AtomicPower = require("./views/pds.js");
// var Collection = require("./collections/collection.js");
// var SolrCollection = require("./collections/solrCollection.js");
var Logger = require("./utility/logger.js");
var helpers = require("./server/serverHelpers.js");

const CONSTANTS = require("./constants.js");

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
app.get("/directory-search.html", helpers.getDirectorySearch);
app.post("/directory-search.html", helpers.postDirectorySearch);
// app.post("/directory-search.html", function(req, res) {
//   logger.log("POST /directory-search.html");
//
//   var providers = new SolrCollection("providers");
//   if (req.query) {
//     logger.log("query " + JSON.stringify(req.query));
//     providers.query = req.query;
//   }
//
//   providers.host = CONSTANTS.SEARCH_SERVICE_HOST;
//   providers.port = CONSTANTS.SEARCH_SERVICE_PORT;
//   providers.path = "/providers";
//
// /* call the service tier vs SOLR directly
//   var providers = new Collection();
//   providers.host = CONSTANTS.APP_SERVICE_HOST;
//   providers.port = CONSTANTS.APP_SERVICE_PORT;
//   providers.path = "/providers";
// */
//   var vm = require("./views/provider-directory-search.js");
//
//   var providersPresenter = new Presenter(
//     "provider-directory-search", // name
//     vm, // viewModel
//     { "provider": CONSTANTS.VIEW_MODEL_COLLECTION_KEY, "btnTextPrimary": "Submit", "btnTextFeedback": "Feedback" }); // property map
//
//   var query = parseLocation(req.body.location);
//   query.distance = Number(req.body.distance);
//   query.specialty = req.body.specialty;
//   providers.fetch({ "query": query },
//     function(code, data) {
//       // success
//       res.status(code).send(providersPresenter.render(data));
//     },
//     function(e) {
//       // error
//       logger.log("ERROR: Failed to request providers: " + e.message);
//       res.status(500).send(e);
//     }
//   );
// });

// var parseLocation = function(location) {
//   var arrayLocation = location.split(",");
//   var result = {};
//   result.lat = Number(arrayLocation[0]);
//   result.long = Number(arrayLocation[1]);
//   return result;
// };

/* REST API */
// app.get("/", function(req, res) {
//   logger.log("GET / -> ABOUT");
//   res.render("about");
// });
//
// app.get("/about", function(req, res) {
//   logger.log("GET /ABOUT");
//   res.send(CONSTANTS.EE_ABOUT);
// });

app.listen(CONSTANTS.EE_PORT, function () {
  logger.log("Provider Directory Experience EndPoint listening on port " + CONSTANTS.EE_PORT);
});
