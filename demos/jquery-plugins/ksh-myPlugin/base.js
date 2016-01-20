(function($) {
	var privateFunction = function() {
		//
	}

	var methods = {
		init: function(options) {
			return this.each(function() {
				var $this = $(this);
				var settings = $this.data('pluginName');

				if(typeof settings === 'undefined') {
					var defaults = {
						propertyName: 'value',
						onSomeEvent: function() {}
					}

					settings = $.extend({}, defaults, options);
					$this.data('plginName', settings);
				} else {
					settings = $.extend({}, settings, options);
				}

				// 
			});
		},
		destroy: function(options) {
			return $(this).each(function() {
				var $this = $(this);

				$this.removeData('plginName');
			});
		},
		val: function(options) {
			var someValue = this.eq(0).html();

			return someValue;
		}
	};

	$.fn.pluginName = function() {
		var method = arguments[0];

		if(methods[method]) {
			method = methods[method];
			arguments = Array.prototype.slice.call(arguments, 1);
		} else if(typeof method === 'object' || !method) {
			method = methods.init;
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.pluginName');
			return this;
		}

		return method.apply(this, arguments);
	};
	
})(jQuery);