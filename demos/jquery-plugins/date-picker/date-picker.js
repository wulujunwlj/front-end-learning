(function($) {
	'use strict';

	$.fn.greenify = function() {
		var shade = '#556b2f';

		this.css('color', shade);
		return this;
	};

	$.fn.greenifyBg = function() {
		var color = '#0BFB7F';

		this.css('background', color);
		return this;
	};

	$.fn.hilight = function (options) {
		var opts = $.extend( {}, $.fn.hilight.defaults, options );
	};

	$.fn.hilight.defaults = {
		foreground: 'red',
		background: 'yellow'
	};

}(jQuery));