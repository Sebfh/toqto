function success(position) {
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	var myOptions = {
	    zoom: 15,
	    center: latlng,
	    mapTypeControl: false,
	    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map"), myOptions);

	var marker = new google.maps.Marker({
	    position: latlng, 
	    map: map, 
	    title:"You are here!",
		message_id: "123"
	});
		
	google.maps.event.addListener(marker, 'click', function() {
		alert(marker.message_id);
	});
		
	
}
function error(msg) {
  alert(msg)
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}
