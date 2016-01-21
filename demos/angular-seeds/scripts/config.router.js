(function(angular) {
	var app = angular.module('app');

	app.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/polls', {
					templateUrl: 'views/poll/list.jade',
					controller: 'PollListCtrl'
				})
				.when('/poll/:pollId', {
					templateUrl: 'views/poll/item.jade',
					controller: 'PollItemCtrl'
				})
				.when('/poll/new', {
					templateUrl: 'views/poll/new.jade',
					controller: 'PollNewCtrl'
				})
				.otherwise({
					redirectTo: '/polls'
				});
		}
	])
		.controller('PollListCtrl', ['$scope', function($scope) {
			var vm = $scope.vm = {};

			$scope.vm.text = '124';
		}])
		.controller('PollItemCtrl', ['$scope', function($scope) {
			$scope.vm.text = '124';
		}])
		.controller('PollNewCtrl', ['$scope', function($scope) {
			$scope.vm.text = '124';
		}]);
})(angular);