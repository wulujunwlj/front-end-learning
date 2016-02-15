'use strict';

describe('RouteParser', function() {
	var RouteParser;

	beforeEach(function() {
		RouteParser = require('./RouteParser.js');
	});

	it('should return a []', function() {
		expect(RouteParser).toBeDefined();
		expect(RouteParser.parse).toBeDefined();
		expect(RouteParser.parse()).toEqual([]);
	});

	it('should return a ["abc"]', function() {
		var path = 'abc';

		expect(RouteParser.parse(path)).toEqual(['abc']);
	});

	it('shoudl return an array', function() {
		var path = 'abc/aaa/xyz';

		expect(RouteParser.parse(path)).toEqual(['abc', 'aaa', 'xyz']);
	})

});