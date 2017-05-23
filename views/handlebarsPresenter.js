var Presenter = require("./presenter.js");

var HandlebarsPresenter = function() {
  Presenter.apply(this, arguments);
};

HandlebarsPresenter.prototype = new Presenter();
/**
 * @method render Renders the Presenter
 * @param data {array} Collection data to enrich the ViewModel
 * @returns {Object} The View in HTML from Handlebars
 * @memberof HandlebarsPresenter
 */
HandlebarsPresenter.render = function(data) {
  return Handlebars.templates[this.getName()](this.enrichData( ((data) ? data : this.viewModel)) );
};
