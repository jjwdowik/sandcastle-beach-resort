
  	function initialize() {

	  	var styles = [
	  	  {
	  	    stylers: [
	  	      { weigth: 1.9 },
	  	      { lightness: 47 }
	  	    ]
	  	  }
	  	];
	  	var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});



		var mapCanvas = document.getElementById('map');
	    var mapOptions = {
	      center: new google.maps.LatLng(44.377408, -83.332621),
	      zoom: 12,
	      scrollwheel: false,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	    var map = new google.maps.Map(mapCanvas, mapOptions);

		infowindow = new google.maps.InfoWindow();

	  	// Create and send the request to obtain details for a specific place,
	  	// using its Place ID.
	  	var request = {
	  	  placeId: 'ChIJ7dzc3AU8J4gRvY-g8ZYATDk'
	  	};

	  	var service = new google.maps.places.PlacesService(map);
	  	service.getDetails(request, function (place, status) {
	  	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	  	    // If the request succeeds, draw the place location on the map
	  	    // as a marker, and register an event to handle a click on the marker.
	  	    var marker = new google.maps.Marker({
	  	      map: map,
	  	      position: place.geometry.location
	  	    });

	  	    google.maps.event.addListener(marker, 'click', function() {
	  	      infowindow.setContent(place.name + "<br />" + place.formatted_address +"<br />" + place.formatted_phone_number + "<br /> <br />" + "<a href='https://goo.gl/maps/5BQ9mVA9DWS2' target='_blank'>Directions</a>");
	  	      infowindow.open(map, this);
	  	      console.log(place)
	  	    });
	  	    google.maps.event.trigger(marker, 'click');
	  	  }
	  	});

	  	map.mapTypes.set('map_style', styledMap);
	  	map.setMapTypeId('map_style');

	}

  	google.maps.event.addDomListener(window, 'load', initialize);

  	// place ID to use: ChIJ7dzc3AU8J4gRvY-g8ZYATDk
  	// follow this guide https://developers.google.com/places/javascript/




