
/**
 * JS 中的算数运算
 * @ 20160222
 */
(function() {
	'use strict';

	var x = 3;
	var y = 1.1;
	print(x + y);
	print(x * y);
	print((x + y) * (x - y));
	print((x * y).toFixed(2));

	var z = 9;
	print(Math.sqrt(z));
	print(Math.abs(y / x));

	function print(str) {
		console.log(str);
	}
}());