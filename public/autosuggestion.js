
var AutoSuggest = (function() {
  var init = function(el) {
    if (el) {
      var ls = document.getElementById(el);
      bindToInput(ls);
    } else {
      console.log("autosuggest cant bind to input");
    }
  }

  var bindToInput = function(el) {
    el.onkeyup = function() {
      if (this.value && this.value.length > 2) {
        getSuggestion(this.value);
      } else {
        return;
      }
    }
  };

  var getSuggestion = function(keyword) {
    var endpoint = "//aw-lx0095:19001/providers/suggestion?freeText="+keyword;

    var jqxhr = $.getJSON(endpoint)
        .done(function(data){
          //compile Handlebars with the data
          console.log(data);
        })
        .fail(function() {
          // fail siliently
          console.log("shit something went wrong");
        })
  };

  return {
    "init": init
  };
}());

var autosuggest_input = "keyword";
AutoSuggest.init(autosuggest_input);
