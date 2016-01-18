(function(angular) {
	console.log('in scripts/main.js');

	var app = angular.module('app');
	app.controller('mainCtrl', ['$scope', '$ocLazyLoad', '$injector', 
		function($scope, $ocLazyLoad, $injector) {
			$ocLazyLoad.load(['./js/controllers/main-ctrl.js', './js/services/user-service.js'])
				.then(function(est) {
					console.log(est);
					var userService = $injector.get('userService');
					userService.addUser({ 'name': 'abc', 'age': 3 });

					console.log(userService.getUser(0));
				})
		}
	])
})(angular);