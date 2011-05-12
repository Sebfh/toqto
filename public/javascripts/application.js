// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Append the function to the "document ready" chain
jQuery(function($) {
	showMessage = function(message_id){
		$('div#selected_message').html('');
		
		$.get('/messages/' + message_id + '.xml', function(result){
			$(result).find('message').each(function () {
				var mess_content = $(this).find('content').text();
				var mess_created = $(this).find('created-at').text();
				var sender_name = $(this).find('sender').find('name').text();
				
				var mess = $('<span class="post-when">' + mess_created + '</span><strong>' + sender_name + '</strong><br><span>' + mess_content + '</span>');
				
				$('div#selected_message').append(mess);
			});
		});
		
	}
})
