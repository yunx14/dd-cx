/* Page level logic */

var $locationInput = $("#location"); // Set the input that accepts location
    autocomplete = new google.maps.places.Autocomplete($locationInput[0]);

function fillInAddress() {
  var place = autocomplete.getPlace();
  var latLng = {
    "lat": place.geometry.location.lat(),
    "lng": place.geometry.location.lng()
  };
  $locationInput.val((latLng.lat+", "+latLng.lng));
}

autocomplete.addListener('place_changed', fillInAddress);
