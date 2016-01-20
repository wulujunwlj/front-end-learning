;(function($, window, document, undefined) {
	var Beautifier = function(ele, opt) {
		this.$element = ele;
		this.defaults = {
			'color': 'red',
			'fontSize': '12px',
			'textDecoration': 'none'
		};
		this.options = $.extend({}, this.defaults, opt);
	};

	Beautifier.prototype = {
		beautify: function() {
			return this.$element.css({
				'color': this.options.color,
				'fontSize': this.options.fontSize,
				'textDecoration': this.options.textDecoration
			});
		}
	}

	$.fn.myPlugin = function(options) {
		// var defaults = {
		// 	'color': 'red',
		// 	'fontSize': '12px'
		// };
		// var settings = $.extend({}, defaults, options);

		// return this.css({
		// 	'color': settings.color,
		// 	'fontSize': settings.fontSize
		// });

		// return 用于支持链式调用
		// return this.each(function() {
		// 	var $this = $(this);
		// 	$this.append(' ' + $this.attr('href'));
		// });

		var beautifier = new Beautifier(this, options);

		return beautifier.beautify();
	}
})(jQuery, window, document);