var Map = {
  map : {},
  markers : [],
  infoWindow : new google.maps.InfoWindow({
  	content: document.getElementById('info-content')
  }),
  zoom : 11,
  bounds : {},

  providerMap: function() {

    Map.map = new google.maps.Map(document.getElementById('provider-map'), {
  		center: new google.maps.LatLng("37", "-122"),
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  		zoom: Map.zoom,
  		scrollwheel: false,
  		disableDefaultUI: false,
  		mapTypeControl: false,
  		backgroundColor: '#fff'
  	});

    Map.markers = []; //reset markers
  	Map.bounds = new google.maps.LatLngBounds(); // reset bounds

    for (var i = 0, h=0; i <= fakeassdata.length; i++, h++) {
			Map.markers[h] = new google.maps.Marker({
				position: new google.maps.LatLng(fakeassdata[i].address.latitude, fakeassdata[i].address.longitude),
				map: Map.map,
        placeResult : fakeassdata[i],
        markerID : i
			});
      attachClickInfo(Map.markers[h]);
		}

    function attachClickInfo(marker) {
      marker.addListener('click', function() {
        Map.infoWindow.open(Map.map, marker);
      	Map.buildIWContent(marker.placeResult);
      });
    }

    //TODO this miscalculates the markers array length
    // if ((end-start) === 0) {
    //   Map.map.setCenter(new google.maps.LatLng(Map.markers[0].position.lat(), Map.markers[0].position.lng()));
    //   // TODO set a default zoom level
    // } else {
    //   for (var j = 0; j < Map.markers.length; j++) {
  	// 		Map.bounds.extend(Map.markers[j].getPosition());
  	// 	}
  	// 	Map.map.fitBounds(Map.bounds);
    // }
  },

  buildIWContent : function(place) {
  	var infoWindowCont = $("#info-content");
  	infoWindowCont.html("some fake ass shit" + place.firstName);
  }
};
