var FEHelpers = (function(){
  var mapPos = document.getElementById("provider-map");
  var formBottom = document.getElementsByClassName("provider-form")[0];
  var col = document.getElementsByClassName("provider-list")[0];
  var bodyHeight = $("body").height();
  var footerHeight = $(".page-footer").height();
  var mapBottomOffset = 67;

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

window.addEventListener("scroll", FEHelpers.debounce(FEHelpers.fixmystuff, 10));
