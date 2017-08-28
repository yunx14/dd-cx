// Detail View Page Logic

var map = document.getElementById('map'),
    latitude = $("#latitude").text(),
    longitude = $("#longitude").text();

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

  var markerIcon = {
    url: "images/map-markers/m1.png",
    size: new google.maps.Size(20, 30),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(9, 25)
  };

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    icon: markerIcon,
    map: map
  });
}

$(".collapse__toggle").click(function() {
  $(this).siblings(".collapse__content").toggle();
});

window.onload = function() {
  mapLocation(latitude, longitude);
};
