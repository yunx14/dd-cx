
var AutoSuggest = (function() {
  var isVisible = false,
      boundElem = {},
      elemValue = "",
      list = {},
      selectedIndex = -1,
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
    el.onblur = function(){
      close();
    }

    el.oninput = function(){
      evaluate.call(this);
    }

    el.onkeydown = function(evt) {
      var c = evt.keyCode;

      if (opened()) {
        if (c === 13) { //Enter
          evt.preventDefault();
          if (list[selectedIndex].dataset.link) {
            window.location.href = list[selectedIndex].dataset.link;
          } else {
            console.log('submit the search');
          }
        } else if (c === 38 || c === 40) { //Up down arrows
          evt.preventDefault();
          c === 38? previous() : next();
        }
      }
    }
  };

  var bindToList = function(selectedList) {
    selectedList.addEventListener("mouseover", function(evt) {
      var target = evt.target,
          related = evt.relatedTarget,
          delegationSelector = "LI",
          match;

      while ( target && target != document && !( match = matches( target.tagName, delegationSelector ) ) ) {
        target = target.parentNode;
      }

      if (!match) {
        return;
      }

      while ( related && related != target && related != document ) {
        related = related.parentNode;
      }

      if ( related == target ) {
        return;
      }

      for (var i = 0; i < list.length; i++) {
        list[i].className = "autosuggest-list__item";
        list[i].setAttribute("aria-selected", "false");
      }

      target.className += " active";

    });
  };

  var matches = function(elem, selector) {
    return elem == selector;
  }

  var opened = function() {
    return isVisible;
  };

  var close = function() {
    if (!opened()) {
      return;
    }

    // Need to unbind the mouseover events
    $(".autosuggest-container").remove();
    isVisible = false;
    selectedIndex = -1
  };

  var open = function() {
    var newList = document.getElementById("autosuggest-template").innerHTML;
    $("#keyword").after(newList);
    $(".autosuggest-container").show();

    list = document.getElementsByClassName("autosuggest-list")[0].getElementsByTagName("li");
    isVisible = true;

    console.log(list);
    bindToList(document.getElementsByClassName("autosuggest-list")[0]);
  };

  var next = function() {
    var count = list.length;

    selectedIndex == count - 1 ? selectedIndex = -1 : selectedIndex++;
    goto();
  };

  var previous = function() {
    var count = list.length;

    selectedIndex == -1 ? selectedIndex = count - 1 : selectedIndex--;
    goto();
  };

  var goto = function() {
    for (var i = 0; i < list.length; i++) {
      list[i].className = "autosuggest-list__item";
      list[i].setAttribute("aria-selected", "false");
    }
    if (selectedIndex != -1) {
      list[selectedIndex].className += " active";
      list[selectedIndex].setAttribute("aria-selected", "true");
      boundElem.value = list[selectedIndex].getElementsByClassName("autosuggest__name")[0].textContent;
    } else {
      boundElem.value = elemValue;
    }
  }

  var evaluate = function() {
    var value = this.value;
    elemValue = this.value;

    if (value && value.length >= 3) {
      // Send the value off to the backend and trigger event on response

      if (!opened()) {
        open();
      }
    } else {
      close();
    }
  }

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
AutoSuggest.init(autosuggest_input, autosuggest_template);
