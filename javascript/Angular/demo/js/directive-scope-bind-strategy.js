'use strict';

var app = angular.module('demoApp', []);

app.controller('bindStrategyDemoCtrl', ['$scope', 
	function ($scope) {
		var vm = $scope.vm = {
			max: 15,
			min: 5
		};

		$scope.callbackFn = function(data) {
			console.log('data-->', data);
		};

	}
]);

app.directive('myDirect', [function () {
	return {
		restrict: 'A',
		scope: {
			max: '=',
			min: '@',
			bindFn: '&'
		},
		template: '<button type="button" ng-click="changeMax()">改变max属性</button>' + 
			'<button type="button" ng-click="changeMin()">改变min属性</button>' + 
			'<button type="button" ng-click="testBindFn()">bindFn</button>',
		link: function (scope, iElement, iAttrs) {
			console.log(typeof scope.max);
			console.log(typeof scope.min);

			// 改变 max 属性
			scope.changeMax = function() {
				scope.max = 50;
			};

			// 改变 min 属性
			scope.changeMin = function() {
				scope.min = 1;
			};

			// bind function
			scope.testBindFn = function() {
				if(angular.isFunction(scope.bindFn)) {
					(scope.bindFn)({user: { 'name': 'username', 'age': 15 }});
				}
			};

		}
	};
}]);