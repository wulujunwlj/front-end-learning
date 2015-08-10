'use strict';

var app = angular.module('demoApp', []);

app.controller('ngModelOptionsCtrl', ['$scope', '$timeout', '$interval', 
	function ($scope, $timeout, $interval) {
		var vm = $scope.vm = {
			debounceTime: 3000
		};

		$scope.blurTriggerFn = function(e) {
			e.preventDefault();

			vm.count = 0;

			// var intervalHandler = $interval(function() {
			// 	$timeout(function() {
			// 		vm.count ++;
			// 	});

			// 	if(vm.count > (vm.debounceTime / 1000)) {
			// 		$interval.cancel(intervalHandler);
			// 	}
			// }, 1000);

		};

	}
]);