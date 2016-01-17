var main = require('../main');
var should = require('should');

describe('test/main.test.js', function() {
	it('should equal 0 when n === 0', function() {
		main.fibonacci(0).should.equal(0);
	});

	it('should equal 1 when n === 1', function() {
		main.fibonacci(1).should.equal(1);
	});

	it('should equals 55 when n === 10', function() {
		main.fibonacci(10).should.equal(55);
	});

	it('should throw when n > 10', function() {
		(function() {
			main.fibonacci(11);
		}).should.throw('n should lower or equal than 10');
	});

	it('should throw when n < 0', function() {
		(function() {
			main.fibonacci(-2);
		}).should.throw('n should greater than 0');
	});

	it('should throw when n is\'t Number', function() {
		(function() {
			main.fibonacci('呵呵');
		}).should.throw('n should should be a number');
	});
});