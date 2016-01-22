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
					controller: 'pollItemCtrl'
				})
				.when('/poll/new', {
					templateUrl: 'views/poll/new.html',
					controller: 'pollNewCtrl'
				})
				.otherwise({
					redirectTo: '/nav'
				});
		}
	])
})(angular);