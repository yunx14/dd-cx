// Detail View Page Logic

var map = document.getElementById('map'),
    latitude = $("#latitude").val(),
    longitude = $("#longitude").val();

function mapLocation(lat, lng) {
  var map = new google.maps.Map(document.getElementById('map'), {
		center: new google.maps.LatLng(lat, lng),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom: 14,
		scrollwheel: false,
		disableDefaultUI: false,
		mapTypeControl: false,
    zoomControl: true,
		backgroundColor: '#fff'
	});

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map
  });
}

window.onload = function() {
  mapLocation(latitude, longitude);
};
