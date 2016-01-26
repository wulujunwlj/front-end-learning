(function(angular) {
	var app = angular.module('app');

	app.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/nav', {
					templateUrl: 'views/nav.html',
					controller: 'navCtrl'
				})
				.when('/polls', {
					templateUrl: 'views/poll/list.html',
					controller: 'pollListCtrl',
					resolve: {
						polls: ['$ocLazyLoad', function($ocLazyLoad) {
							return $ocLazyLoad.load('js/controllers/poll.js');
						}]
					}
				})
				.when('/poll/:pollId', {
					templateUrl: 'views/poll/item.html',
					controller: 'pollItemCtrl',
					resove: {
						polls: ['$ocLazyLoad', function($ocLazyLoad) {
							return $ocLazyLoad.load('js/controllers/poll.js');
						}]
					}
				})
				.when('/poll/new', {
					templateUrl: 'views/poll/new.html',
					controller: 'pollNewCtrl',
					resove: {
						polls: ['$ocLazyLoad', function($ocLazyLoad) {
							return $ocLazyLoad.load('js/controllers/poll.js');
						}]
					}
				})
				.otherwise({
					redirectTo: '/nav'
				});
		}
	])
})(angular);