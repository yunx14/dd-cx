
var AutoSuggest = (function() {
  var isVisible = false, // autosuggest container
      boundElem = {}, // input selector
      elemValue = "", // value of the input selector
      list = {},  // list of autosuggest items
      selectedIndex = -1; // keep track of selected item

  var init = function(el, template) {
    if (el) {
      boundElem = document.getElementById(el);
      var ls = document.getElementById(el);
      bindToInput(ls);
    } else {
      console.log("autosuggest cant bind to input");
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
      var c = window.event? evt.keyCode : evt.which;

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
    selectedList.addEventListener("mousedown", function(evt) {
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

      if (target.dataset.link) {
        window.location.href = target.dataset.link;
      } else {
        boundElem.value = target.getElementsByClassName("autosuggest__name")[0].textContent;
      }

    });

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
  };

  var hasClass = function(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
  };

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

  var open = function(compiledTemplate) {
    if(compiledTemplate) {
      $("#keyword").after(compiledTemplate);
      $(".autosuggest-container").show();

      list = document.getElementsByClassName("autosuggest-list")[0].getElementsByTagName("li");
      isVisible = true;
      bindToList(document.getElementsByClassName("autosuggest-list")[0]);
    } else {
      console.log("template is not defined");
    }
    
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
    var keyword = this.value;
    elemValue = this.value;

    if (keyword && keyword.length >= 3) {
      // Send the value off to the backend and trigger event on response
      var endpoint = "http://aw-lx0176/find-a-dentist/alpha/fakedata.json?freeText="+keyword;
  
      var jqxhr = $.getJSON(endpoint)
          .done(function(data){
            //compile Handlebars with the data
            var template = Handlebars.compile(autosuggest_template);
            var html = template(data);

            if (!opened()) {
              open(html);
            }
          })
          .fail(function() {
            console.log("couldnt reach db");
            close();
          });
    } else {
      close();
    }
  }

  return {
    "init": init
  };
}());

var autosuggest_input = "keyword";
var autosuggest_template = '<div id="autosuggest-container" class="autosuggest-container" style="display:none"><ul class="autosuggest-list" role="listbox" aria-activedescendant>{{#if specialties}}<div class="autosuggest__heading"><p>Specialties</p></div>{{#each specialties}}<li class="autosuggest-list__item" id="assp{{@index}}" role="option"><div class="autosuggest-item" ><div class="autosuggest__icon"><i class="icon icon-search-black"></i></div><div class="autosuggest__term"><span class="autosuggest__name">{{name}}</span></div></div></li>{{/each }}{{/if}}{{#if providers}}<div class="autosuggest__heading"><p>Providers</p></div>{{#each providers}}<li class="autosuggest-list__item" role="option" id="aspr{{@index}}" data-link="'+providerDetailsPage+'?providerKey={{providerKey}}&lat={{address.latitude}}&long={{address.longitude}}&location={{address.city}}"><div class="autosuggest-item"><div class="autosuggest__icon"><i class="icon icon-user"></i></div><div class="autosuggest__term"><span class="autosuggest__name">{{firstName}} {{lastName}}</span><span class="autosuggest__specialty">{{specialty}}</span><div class="autosuggest__address"> <span class="autosuggest__address-street">{{address.addressLine}}</span><span class="autosuggest__address-city">{{address.city}}, </span><span class="autosuggest__address-state">{{address.state}}</span></div></div></div></li>{{/each }}{{/if}}{{#if practiceLocations}}<div class="autosuggest__heading"><p>Offices</p></div>{{#each practiceLocations}}<li class="autosuggest-list__item" id="aspl{{@index}}" role="option" data-link="'+'officeDetailsPage+'?practiceLocationNumber={{practiceLocationNumber}}&lat={{address.latitude}}&long={{address.longitude}}&location={{address.city}}"><div  class="autosuggest-item" ><div class="autosuggest__icon"><i class="icon icon-office"></i></div> <div class="autosuggest__term"><span class="autosuggest__name">{{officeName}}</span> <div class="autosuggest__address"><span class="autosuggest__address-street">{{address.addressLine}}</span><span class="autosuggest__address-city">{{address.city}}, </span><span class="autosuggest__address-state">{{address.state}}</span></div></div></div></li>{{/each }}{{/if}}{{#if facilities}}<div class="autosuggest__heading"><p>Facilites</p></div>{{#each facilities}}<li class="autosuggest-list__item" id="asfa{{@index}}" role="option" data-link="'+facilityDetailsPage+'?facilityId={{facilityId}}&lat={{address.latitude}}&long={{address.longitude}}&location={{address.city}}"><div  class="autosuggest-item"><div class="autosuggest__icon"><i class="icon icon-office"></i></div><div class="autosuggest__term"><span class="autosuggest__name">{{facilityName}}</span><div class="autosuggest__address"><span class="autosuggest__address-street">{{address.addressLine}}</span><span class="autosuggest__address-city">{{address.city}}, </span><span class="autosuggest__address-state">{{address.state}}</span></div></div></div></li>{{/each }}{{/if}}</ul></div>';
AutoSuggest.init(autosuggest_input);
