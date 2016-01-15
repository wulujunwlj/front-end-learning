(function() {
	'use strict';

	var app = angular.module('app', ['ngRoute']);

	app.controller('mainCtrl', ['$scope', '$route', '$routeParams', '$location', 
		function($scope, $route, $routeParams, $location) {
			// 
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
		.config(['$routeProvider', '$locationProvider', 
			function($routeProvider, $locationProvider) {
				$routeProvider
					.when('/book/:bookId', {
						templateUrl: 'book.html',
						controller: 'bookCtrl',
						resolve: {
							delay: function($q, $timeout) {
								var delay = $q.defer();
								$timeout(delay.resolve, 1000);

								return delay.promise;
							}
						}
					})
					.when('/book/:bookId/ch/:chapterId', {
						templateUrl: 'chapter.html',
						controller: 'chapterCtrl'
					});

					// $locationProvider.html5Mode(true);
			}
		])
})();