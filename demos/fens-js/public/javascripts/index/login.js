(function($) {
	'use strict';

	$(document).ready(function() {
		console.log('in login.js');

		var $username = $('#username'),
			$password = $('#password'),
			$btnSubmit = $('#submit');

		$btnSubmit.on('click', function() {
			var username = $username.val(),
				password = $password.val();

			$.ajax({
				type: 'POST',
				url: '/doLogin',
				data: 'username=' + username + '&password=' + password,
				success: function(msg) {
					console.log(msg);
				}
			})
		});
	});
})(jQuery);