jQuery(function($) {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(success, error);
	} else {
	  error('not supported');
	}
})
function success(position){
	$('#message_lat').val(position.coords.latitude);
	$('#message_long').val(position.coords.longitude);
}
function error(msg) {
  alert(msg)
}