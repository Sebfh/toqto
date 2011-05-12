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
	
	$.get('/messages.xml', function(data) {
		$(data).find('message').each(function(){
			var mess_id = $(this).find('id').text();
			var mess_content = $(this).find('content').text();
			var lat = $(this).find('lat').text();
			var lon = $(this).find('long').text();

			//alert(mess_id + '|' + mess_content)
			var latlng = new google.maps.LatLng(lat, lon);
			var marker = new google.maps.Marker({
			    position: latlng, 
			    map: map, 
			    title:mess_content,
				message_id: mess_id,
				icon: '/images/heart.png'
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				showMessage(marker.message_id);
			});
		});
	}, 'xml');
	
	var marker = new google.maps.Marker({
	    position: latlng, 
	    map: map, 
	    title:"You are here!",
		message_id: "123",
		icon: '/images/bullet_blue.png'
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