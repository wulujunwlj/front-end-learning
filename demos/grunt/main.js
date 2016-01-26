require.config({
	baseUrl: '',
	shim: {
		$: {
			exports: 'zepto'
		},
		_: {
			exports: 'underscore'
		},
		B: {
			deps: [
				'_',
				'$'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		'$': 'src/zepto',
		'_': 'src/underscore',
		'B': 'src/backbone',
	}
});

requirejs(['B'], function(b) {
	//
});