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

    Map.oms = new OverlappingMarkerSpiderfier(Map.map, {
      markersWontMove: true,
      markersWontHide: true,
      basicFormatEvents: true
    });
    Map.markers = []; //reset markers
  	Map.bounds = new google.maps.LatLngBounds(); // reset bounds
    Map.markerIcon = {
      url: "images/map-markers/m1.png",
      size: new google.maps.Size(20, 30),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(9, 30)
    };

    for (var i = 0, h=0; i < currentProviders.length; i++, h++) {
			Map.markers[h] = new google.maps.Marker({
				position: new google.maps.LatLng(currentProviders[i].address.latitude, currentProviders[i].address.longitude),
        placeResult : currentProviders[i],
        icon: Map.markerIcon,
        markerID : i
			});
      attachClickInfo(Map.markers[h]);
      Map.oms.addMarker(Map.markers[h]);
		}

    Map.markerCluster = new MarkerClusterer(Map.map, Map.markers, {gridSize: 30, maxZoom: 20, imagePath: "images/map-markers/m", styles: [{
        url: 'images/map-markers/m1.png',
        height: 30,
        width: 20,
        textColor: '#ffffff',
        textSize: 11
      }]});

    function attachClickInfo(marker) {
      marker.addListener('click', function() {
        Map.infoWindow.open(Map.map, marker);
      	Map.buildIWContent(marker.placeResult);
      });
    }

    for (var j = 0; j < Map.markers.length; j++) {
			Map.bounds.extend(Map.markers[j].getPosition());
		}
		Map.map.fitBounds(Map.bounds);

  },

  buildIWContent : function(place) {
  	var infoWindowCont = $("#info-content");
  	infoWindowCont.html(place.firstName+" "+place.lastName+"<br/>"+place.address.addressLine+"<br/>"+place.address.city+", "+place.address.state+" "+place.address.zipcode+"<br/>"+place.officePhone);
  }
};

Map.providerMap(currentProviders);
