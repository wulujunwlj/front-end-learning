'use strict';

define(function() {
	function Window() {
		this.cfg = {
			width: 500,
			height: 300,
			content: '',
			handler4AlertBtn: null,
			title: '系统消息',
			hasCloseBtn: false,
			handler4CloseBtn: null,
			skinClassName: null,
			text4AlertBtn: '确定',
			hasMask: true,
			handler4CancelBtn: null
		}
	};

	Window.prototype = {
		alert: function(cfg) {
			var CFG = $.extend(this.cfg, cfg);
			// alert div
			var boundingBox = $(
				'<div class="window_boundingBox">' +
					'<div class="window_header">' + CFG.title + '</div>' + 
					'<div class="window_body">' + CFG.content + '</div>' + 
					'<div class="window_footer"><input type="button" value="' + CFG.text4AlertBtn + '"></div>' + 
				'</div>');

			// confirm button
			var btn = boundingBox.find('.window_footer input'),
					mask = null;

			if(CFG.hasMask) {
				mask = $('<div class="window_mask"></div>');

				mask.click(function(event) {
					CFG.handler4CancelBtn && CFG.handler4CancelBtn();

					mask.remove();
					boundingBox.remove();
				});
				mask.appendTo('body');
			}
			boundingBox.appendTo('body');

			btn.click(function() {
				// callback function
				CFG.handler4AlertBtn && CFG.handler4AlertBtn();

				mask.remove();
				boundingBox.remove();
			});

			$.extend(this.cfg, cfg);

			boundingBox.css({
				width: CFG.width + 'px',
				height: CFG.height + 'px',
				left: (CFG.x || (window.innerWidth - CFG.width) / 2) + 'px',
				top: (CFG.y || (window.innerHeight - CFG.height) / 2) + 'px'
			});

			// close button
			if(CFG.hasCloseBtn) {
				var closeBtn = $('<span class="window_closeBtn">X</span>');
				closeBtn.appendTo(boundingBox);

				closeBtn.click(function() {
					CFG.handler4CloseBtn && CFG.handler4CloseBtn();

					mask.remove();
					boundingBox.remove();
				});
			}

			// skin class
			if(CFG.skinClassName) {
				boundingBox.addClass(CFG.skinClassName);
			}

		},
		confirm: function() {},
		prompt: function() {}
	};

	return {
		Window: Window
	};

});