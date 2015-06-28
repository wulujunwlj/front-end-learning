'use strict';

require.config({
	paths: {
		jquery: 'jquery.min'
	}
});

// require(['window'], function(w) {
// 	new w.Window().alert();
// });

require(['jquery', 'window'], function($, w) {
	$('#btn_trigger').click(function() {
		new w.Window().alert({
			title: '提示',
			content: 'Welcome wlj',
			width: 300,
			height: 200,
			y: 120,
			handler4AlertBtn: function() {
				console.log('You clicked confirm button...');
			},
			hasCloseBtn: true,
			handler4CloseBtn: function() {
				console.log('You just canceled...');
			}
			,
			skinClassName: 'window_skin_a'
			,
			text4AlertBtn: 'OK',
			handler4CancelBtn: function() {
				console.log('You just clicked the mask div...');
			}
		});

		// new w.Window().alert('Welcome!', function() {
		// 	alert('You clicked confirm button.')
		// }, {
		// 	width: 300,
		// 	height: 150,
		// 	y: 50
		// });
	});
});