var Presenter = require("./presenter.js");
/**
 * A view class for managing presentation and managing view data</br>
 * Designed to use Handlebars as a render engine
 * @constructor HandlebarsPresenter
 * @param n {string} Name of the view/template
 * @param vm {Object} A property-based ViewModel
 * @param map {object} Property Map used to map data to the ViewModel
 * @example var myPresenter = new HandlebarsPresenter("MyTemplate", ViewModel, { "something": "this" });
 */
var HandlebarsPresenter = function() {
  Presenter.apply(this, arguments);
};
HandlebarsPresenter.prototype = new Presenter();
/**
 * @method render Renders the Presenter using Handlebars
 * @param data {array} Collection data to enrich the ViewModel
 * @returns {Object} The View in HTML from Handlebars
 * @memberof HandlebarsPresenter
 */
HandlebarsPresenter.render = function(data) {
  return Handlebars.templates[this.getName()](this.enrichData( ((data) ? data : this.viewModel)) );
};

module.exports = HandlebarsPresenter;
