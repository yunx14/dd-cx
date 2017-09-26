/* Page level logic */

var $locationInput = $("#location"), // Set the input that accepts location
    $latitudeInput = $("#latitude"),
    $longitudeInput = $("#longitude"),
    autocomplete = new google.maps.places.Autocomplete($locationInput[0]);

function fillInAddress() {
  var place = autocomplete.getPlace();
  var latLng = {
    "lat": place.geometry.location.lat(),
    "lng": place.geometry.location.lng()
  };
  $latitudeInput.val(latLng.lat);
  $longitudeInput.val(latLng.lng);
}

autocomplete.setComponentRestrictions({'country': ['us', 'pr', 'vi', 'gu', 'mp']});
autocomplete.addListener('place_changed', fillInAddress);

function selectLocation(elementID) {
  var pac_input = document.getElementById(elementID);

  (function pacSelectFirst(input) {
    // store the original event binding function
    var _addEventListener = (input.addEventListener) ? input.addEventListener : input.attachEvent;

    function addEventListenerWrapper(type, listener) {
        // Simulate a 'down arrow' keypress on hitting 'return' when no pac suggestion is selected,
        // and then trigger the original listener.
        if (type == "keydown") {
            var orig_listener = listener;
            listener = function(event) {
                var suggestion_selected = $(".pac-item-selected").length > 0;
                if ((event.which == 13 || event.which == 9) && !suggestion_selected) {
                    var simulated_downarrow = $.Event("keydown", {
                        keyCode: 40,
                        which: 40
                    });
                    orig_listener.apply(input, [simulated_downarrow]);
                }
                orig_listener.apply(input, [event]);
                if(event.which == 13) {
                  var place = autocomplete.getPlace();
                  if (place.geometry.location.lat() != $latitudeInput.val()) { // check that autocomplete.place has lat and long equal to the lat and long in the hidden fields
                    event.preventDefault();
                    return false;
                  } 
                }
            };
        }

        _addEventListener.apply(input, [type, listener]);
    }

    input.addEventListener = addEventListenerWrapper;
    input.attachEvent = addEventListenerWrapper;

  })(pac_input);
}
selectLocation("location");
