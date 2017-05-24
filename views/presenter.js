const CONSTANTS = require("../constants.js");

/**
 *  A view class for managing presentation and managing view data
 * @constructor Presenter
 * @param n {string} Name of the view/template
 * @param vm {Object} A property-based ViewModel
 * @param map {object} Property Map used to map data to the ViewModel
 * @example var myPresenter = new Presenter();
 * @example var myPresenter = new Presenter("MyTemplate", ViewModel, { "something": "this" });
 */
var Presenter = function(n, vm, map) {
  /**
   * @property name {string} name of view/template
   * @memberof Presenter
   */
  this.name = n;
  /**
   * @property viewModel {Object} A property-based ViewModel
   * @memberof Presenter
   */
  this.viewModel = vm;
  /**
   * @property propertyMap {Object} Property Map used to map data to the ViewModel
   * @memberof Presenter
   */
  this.propertyMap = map;
};
/**
 * @method getName returns the name of the view/template
 * @returns {string} name of the view/template
 * @memberof Presenter
 */
Presenter.prototype.getName = function() {
  return this.name;
};
/**
 * @method setPropertyMap Sets the property map to a new set of values
 * @param myMap {object} The map to set
 * @memberof Presenter
 */
Presenter.prototype.setPropertyMap = function(myMap) {
  this.propertyMap = myMap;
};
/**
 * @method mergePropertyMap Merges the property map with a new set of values
 * @param myMap {object} The map to merge
 * @memberof Presenter
 */
Presenter.prototype.mergePropertyMap = function(myMap) {
  var key = null;
  for (key in myMap) {
    this.propertyMap[key] = myMap[key];
  }
};
/**
 * @method enrichData Enriches the ViewModel with data passed in
 * @param data {array} Collection data to enrich the ViewModel
 * @returns {Object} The enriched ViewModel for the view/template
 * @memberof Presenter
 */
Presenter.prototype.enrichData = function(data) {
  if (data && this.viewModel) {
    var fullData = this.viewModel, i = 0, k = Object.keys(this.propertyMap), l = k.length, keyName = "";

    for (i = 0; i < l; i++) {
      keyName = k[i];

      if (this.propertyMap[keyName] === CONSTANTS.VIEW_MODEL_COLLECTION_KEY) {
        fullData[keyName] = data;
      } else {
        fullData[keyName] = this.propertyMap[keyName];
      }
    }
    return fullData;
  }
  return data;
};

/**
 * @method render Renders the Presenter
 * @param data {array} Collection data to enrich the ViewModel
 * @returns {Object} The View
 * @memberof Presenter
 */
Presenter.prototype.render = function(data) {
  return {};
};

module.exports = Presenter;
