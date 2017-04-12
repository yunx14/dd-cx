/* Abstract View */

const VIEW_MODEL_COLLECTION_KEY = "{{collection}}";

module.exports = View = function(n, vm, map) {
  var name = n;
  this.collection = null;
  this.model = null;
  this.viewModel = vm;
  this.propertyMap = map;
  this.getName = function() {
    return name;
  };
  this.enrichData = function(data) {
    if (data && this.viewModel) {
      // TODO: merge the view model here
      var fullData = this.viewModel, i = 0, k = Object.keys(this.propertyMap), l = k.length, keyName = "";

      for (i = 0; i < l; i++) {
        keyName = k[i];

        if (this.propertyMap[keyName] === VIEW_MODEL_COLLECTION_KEY) {
          fullData[keyName] = data;
        } else {
          fullData[keyName] = this.propertyMap[keyName];
        }
      }

      console.log("data " + JSON.stringify(fullData));
      //fullData["locations"] = data;
      return fullData;
    }
    return data;
  };
};
