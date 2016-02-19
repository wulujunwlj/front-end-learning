
var Cal = (function() {
	var num = {
		base: 0
	};

	var add = function() {
		num.base ++;

		return num.base;
	};

	var desc = function() {
		--num.base;

		return num.base;
	};

	return {
		add, desc, num
	};
})();


var expect = require('chai').expect;

describe('Counter', function() {
	it('it should increase', function() {
		expect(Cal.num.base).to.below(Cal.add());
	});

	it('it should decrease', function() {
		expect(Cal.num.base).to.above(Cal.desc());
	});
});