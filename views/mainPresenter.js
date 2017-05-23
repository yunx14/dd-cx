var Presenter = require("./presenter.js");

/**
 * A view class for managing presentation and managing view data</br>
 * Wraps a <em>main</em> template around the template passed
 * @constructor MainPresenter
 * @param n {string} Name of the view/template
 * @param vm {Object} A property-based ViewModel
 * @param map {object} Property Map used to map data to the ViewModel
 * @param main {string} The main template to wrap
 * @example var myPresenter = new MainPresenter("MyTemplate", ViewModel, { "something": "this" }, "main");
 */
var MainPresenter = function(n, vm, map, main) {
  /**
   * @property name {string} name of view/template
   * @memberof MainPresenter
   */
  this.name = n;
  /**
   * @property viewModel {Object} A property-based ViewModel
   * @memberof MainPresenter
   */
  this.viewModel = vm;
  /**
   * @property propertyMap {Object} Property Map used to map data to the ViewModel
   * @memberof MainPresenter
   */
  this.propertyMap = map;
  /**
   * @property main {string} The name of the 'main' template to wrap
   * @memberof MainPresenter
   */
  this.mainTemplate = main;
};

MainPresenter.prototype = new Presenter();
/**
 * @method render Renders the Presenter and wraps the main template areound sub-template
 * @param data {array} Collection data to enrich the ViewModel
 * @returns {Object} The View in HTML from Handlebars
 * @memberof MainPresenter
 */
MainPresenter.render = function(data) {
  var enriched = this.enrichData( ((data) ? data : this.viewModel));
  enriched.body = this.getName();
  return Handlebars.templates[this.mainTemplate](enriched);
};
