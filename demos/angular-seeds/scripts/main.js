(function(angular) {
	'use strict';

	var app = angular.module('app');

	app.config(['$ocLazyLoadProvider', 
		function($ocLazyLoadProvider) {
			$ocLazyLoadProvider.config({
				debug: false,	/* default: false */
				events: true,	/* default: false */
				modules: [		/* default: undefined */
					{
						name: 'services',
						files: ['js/services/services.js', 'js/services/log.js', 'js/services/data-service.js']
					}
				]
			});
		}]
	);
	// app.controller('mainCtrl', ['$scope', '$ocLazyLoad', '$injector', 
	// 	function($scope, $ocLazyLoad, $injector) {
	// 		$ocLazyLoad.load(['./js/controllers/main-ctrl.js', './js/services/user-service.js'])
	// 			.then(function(est) {
	// 				var userService = $injector.get('userService');
	// 				userService.addUser({ 'name': 'abc', 'age': 3 });

	// 				console.log(userService.getUser(0));
	// 			})
	// 	}
	// ])

	var socket = io();
	socket.on('connect', function() {
		console.log('connected');
	})
	socket.on('news', function(data) {
		console.log(data);
		socket.emit('my other event', { my: 'data' });
	});
})(angular);