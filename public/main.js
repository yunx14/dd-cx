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

$(".refine__toggle").click(function(){
  (".refine__menu").toggleClass("open");
});
