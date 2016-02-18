
// 来源:几个必备的 JavaScript 函数 - http://bubkoo.com/2015/06/10/7-essential-javascript-functions/

/**
 * 去抖动
 * @param  {[type]} func      [description]
 * @param  {[type]} wati      [description]
 * @param  {[type]} immediate [description]
 * @return {[type]}           [description]
 */
function debounce(func, wati, immediate) {
	var timeout;

	return function() {
		var context = this, 
			args = arguments;

		var later = function() {
			timeout = null;
			if(!immediate) {
				func.apply(context, args);
			}
		};

		var callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) {
			func.apply(context, args);
		}
	};
}

function poll(fn, callback, errback, timeout, interval) {
	var endTime = Number(new Date()) + (timeout || 2000);

	interval = interval || 100;
	(function p() {
		if (fn()) {
			callback();
		}
		else if (Number(new Date()) < endTime) {
			setTimeout(p, interval);
		}
		else {
			errback(new Error('timed out for ' + fn + ': ' + arguments));
		}
	}());
}