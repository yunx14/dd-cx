// Detail View Page Logic

var map = document.getElementById('map'),
    queryString = {},
    query = window.location.search.substring(1);

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
  var vars = query.split("&");
  for (var i; i< vars.length; i++) {
     var pair = vars[i].split("=");
     queryString[pair[0]] = decodeURIComponent(pair[1]);
  }

  mapLocation(queryString.lat, queryString.long);
};
