
var AutoSuggest = (function() {
  var isVisible = false,
      boundElem = {},
      list = {},
      templateName = "";

  var init = function(el, template) {
    if (el) {
      boundElem = document.getElementById(el);
      var ls = document.getElementById(el);
      bindToInput(ls);
    } else {
      console.log("autosuggest cant bind to input");
    }

    if(template) {
      templateName = template;
    } else {
      console.log("template is unavailable");
    }
  }

  var bindToInput = function(el) {
    el.onkeydown = function(evt) {
      var c = evt.keyCode;

      if (opened) {
        if (c === 13) { //Enter
          evt.preventDefault();
          console.log("I pick this one");
        } else if (c === 38 || c === 40) { //Up down arrows
          evt.preventDefault();
          c === 38? previous() : next();
        }
      } else {
        if (this.value && this.value.length > 2) {
          open();
        } else {
          close();
        }
      }
    }
  };

  var opened = function() {
    return isVisible;
  };

  var close = function() {
    if (!opened) {
      return;
    }
    //document.getElementById("autosuggest-container").remove();
    $(".autosuggest-container").remove();
    isVisible = false;
  };

  var open = function() {
    var newList = document.getElementById("autosuggest-template").innerHTML;
    $("#keyword").after(newList);
    $(".autosuggest-container").show();

    list = $(".autosuggest-container");
    isVisible = true;
  };

  var next = function() {
    console.log("select the next option");
  };

  var previous = function() {
    console.log("select the previous option");
  };

  // var getSuggestion = function(keyword) {
  //   var endpoint = "//aw-lx0095:19001/providers/suggestion?freeText="+keyword;
  //
  //   var jqxhr = $.getJSON(endpoint)
  //       .done(function(data){
  //         //compile Handlebars with the data
  //         console.log(data);
  //       })
  //       .fail(function() {
  //         // fail siliently
  //         console.log("shit something went wrong");
  //       })
  // };

  return {
    "init": init
  };
}());

var autosuggest_input = "keyword";
var autosuggest_template = "autosuggest-template";
AutoSuggest.init(autosuggest_input);
