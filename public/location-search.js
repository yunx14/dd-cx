/* Location Search Module */

var LocationSearch = (function() {
  var model = {}, el = "", valid = true;

  var validate = function() {
    // some rules
    valid = true;
    return true;
  };

  var syncModel = function(event) {
    if (event && event.currentTarget) {
      model[event.currentTarget.name] = event.currentTarget.value;
    }
  };

  var bindModel = function(el) {
    var els = el.getElementsByTagName("input");
    if (els) {
      var i = 0, l = els.length;
      for (i = 0; i < l; i++) {
        els[i].addEventListener("input", syncModel);
      }
    }
  };

  var init = function(viewEl) {
    if (viewEl) {
      el = viewEl;
      var ls = document.getElementById(el);
      bindModel(ls);
    } else {
      console.warn("No view anchor point!  Not binding.");
    }
  };

  var cleanup = function() {
    var ls = document.getElementById(el);
    var els = ls.getElementsByTagName("input");
    if (els) {
      var i = 0, l = els.length;
      for (i = 0; i < l; i++) {
        els[i].removeEventListener("input", syncModel);
      }
    }
  };

  var get = function(key) {
    return model[key];
  };

  return {
    "init": init,
    "cleanup": cleanup,
    "getModelValue": get,
    "model": model,
    "validate": validate
  };
}());

// Initialize the 'view'

const LOCATION_SEARCH_VIEW_ANCHOR = "location-search";
LocationSearch.init(LOCATION_SEARCH_VIEW_ANCHOR);

LocationSearch.validate = function() {
  var v = /^\d{5}$/.test(LocationSearch.model["search"]);
  return v;
}

// debug only
var d = document.getElementById("debugButton");
if (d) {
  d.addEventListener("click", function() {
    alert("Model: " + JSON.stringify(LocationSearch.model) +  " isValid: " + LocationSearch.validate());
  });
}
