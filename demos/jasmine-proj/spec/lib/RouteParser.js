'use strict';

var parse = function(routeString) {
	if(!routeString) {
		return [];
	} else {
		return routeString.split('/');
	}
}

module.exports = {
	parse: parse
}