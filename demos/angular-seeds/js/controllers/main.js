(function(angular) {
	'use strict';

	var app = angular.module('app');

	app.controller('mainCtrl', ['$scope', '$route', '$routeParams', '$location', 
		function($scope, $route, $routeParams, $location) {
			var vm = $scope.vm = {};

			vm.ctrlName = 'mainCtrl';
		}
	])
		.controller('bookCtrl', ['$scope', '$routeParams', 
			function($scope, $routeParams) {
				$scope.name = 'bookCtrl';
				$scope.params = $routeParams;
			}
		])
		.controller('chapterCtrl', ['$scope', '$routeParams', 
			function($scope, $routeParams) {
				$scope.name = 'chapterCtrl';
				$scope.params = $routeParams;
			}
		])
})(angular);