/* Location Search Module */

module.exports = View = function(m, e) {
  var model = (m) ? m : {},
      el = (e) ? e : "",
      valid = true;

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
};
