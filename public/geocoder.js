/* Google Maps Geocoder Instance */

var geocoder = new google.maps.Geocoder();

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
				callback(status);
			}
		}
	);
};

exports.getLatLong = getLatLong;
