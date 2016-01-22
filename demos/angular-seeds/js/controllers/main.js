(function(angular) {
	'use strict';

	var app = angular.module('app');

	app
		.controller('mainCtrl', ['$scope', '$route', '$routeParams', '$location', '$ocLazyLoad', '$injector', '$rootScope', '$log', 
			function($scope, $route, $routeParams, $location, $ocLazyLoad, $injector, $rootScope, $log) {
				var vm = $scope.vm = {};

				$scope.$on('ocLazyLoad.moduleLoaded', function(e, module) {
					$log.log('moduleLoaded', module);
				});

				function init() {				

					$rootScope.$on('$routeChangeStart', function(e, data) {
						$log.log('$routeChangeStart', data);
					});

					$rootScope.$on('$routeChangeSuccess', function(e, data) {
						$log.log('$routeChangeSuccess', data);
					});

					$rootScope.$on('$routeChangeError', function(e, data) {
						$log.log('$routeChangeError', data);
					});
				}

				$ocLazyLoad.load('services')
					.then(function() {
						init();

						var dataService = $injector.get('dataService');
						var userService = $injector.get('userService');
						var log = $injector.get('$log');

						dataService.getData('/service/navList')
							.then(function(data) {
								vm.app = data.app;
								vm.navList = data.nav;
								vm.APIs = data.APIs;

							}, function(reason) {
								$log.log(reason);
							});
					});
			}
		])
		.controller('navCtrl', ['$scope', function($scope) {
			$scope.ctrlName = 'navCtrl';
		}])
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