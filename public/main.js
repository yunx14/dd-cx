/* Page level logic */

var $locationInput = $("#location"), // Set the input that accepts location
    geocoder = new google.maps.Geocoder();

var getLatLong = function(zipCode, callback) {
	geocoder.geocode({"componentRestrictions": {"postalCode": zipCode}},
		function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var latLng = {
					"lat": results[0].geometry.location.lat(),
					"lng": results[0].geometry.location.lng()
				};
				callback(latLng);
			} else {
				alert(status);
			}
		}
	);
};

var convertToLatLng = function(location) {
	getLatLong(location, function(result) {
		$locationInput.val((result.lat+", "+result.lng));
	});
};

$("#address_form").on("submit", function(event) {
  event.preventDefault();
  convertToLatLng($locationInput.val());
});
