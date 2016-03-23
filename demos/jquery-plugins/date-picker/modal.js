(function($) {
	'use strict';

	var demo = document.querySelector('#demo');
		demo.addEventListener('click', timeSelect);

	function timeSelect(evt) {
		console.log(evt);
	}; 

	var $green = $('.green');
	$green.greenify().greenifyBg();
}(jQuery));