var FEHelpers = (function(){
  var mapPos = document.getElementById("provider-map");
  var formBottom = document.getElementsByClassName("provider-form")[0];
  var col = document.getElementsByClassName("provider-list")[0];

  var debounce = function(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  var throttle = function(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  };

  var fixmystuff = function() {
    if(formBottom.getBoundingClientRect().bottom <= 0) {
      if(mapPos.getBoundingClientRect().top > 32) {
        mapPos.className = "provider-map fixed";
      }
      if(Math.ceil(mapPos.getBoundingClientRect().bottom) >= Math.ceil(col.getBoundingClientRect().bottom)) {
        mapPos.className = "provider-map absolute";
      } else {
        mapPos.className = "provider-map fixed";
      }
    } else {
      mapPos.className = "provider-map";
    }
  };

  return {
    "debounce": debounce,
    "fixmystuff": fixmystuff
  };
}());

window.addEventListener("scroll", FEHelpers.throttle(FEHelpers.fixmystuff, 10));
