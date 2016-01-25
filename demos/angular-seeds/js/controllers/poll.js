(function(angular) {
	var app = angular.module('app');

	app
		.controller('pollListCtrl', ['$scope', 'dataService', function($scope, dataService) {
			var vm = $scope.vm = {};
			
			$scope.vm.ctrlName = 'pollListCtrl';
			$scope.polls = [];
		}])
		.controller('pollItemCtrl', ['$scope', function($scope) {
			$scope.vm.ctrlName = 'pollItemCtrl';

			$scope.poll = {};
			$scope.vote = function() {
				// 
			}
		}])
		.controller('pollNewCtrl', ['$scope', function($scope) {
			$scope.vm.ctrlName = 'pollNewCtrl';

			$scope.poll = {
				question: '',
				choices: [
					{
						text: ''
					}, {
						text: ''
					}, {
						text: ''
					}
				]
			};

			$scope.addChoice = function() {
				$scope.poll.choices.push({ text: '' });
			};

			$scope.createPoll = function() {
				// 
			};
		}]);
})(angular);