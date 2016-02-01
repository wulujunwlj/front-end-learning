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
				url: '/admin/doLogin',
				data: 'username=' + username + '&password=' + password,
				success: function(res) {
					if(res.status) {
						window.location.href = res.url;
					} else {
						// 
						var $loginTip = $('.login-tip');

						$loginTip
							.addClass('bg-danger')
							.text(res.msg)
							.removeClass('hidden');
					}
				}
			})
		});
	});
})(jQuery);