'use strict';

var app = angular.module('demoApp', []);

app.controller('ngModelOptionsCtrl', ['$scope', '$timeout', '$interval', 
	function ($scope, $timeout, $interval) {
		var vm = $scope.vm = {
			debounceTime: 3000
		};

		// onblur 触发方法
		$scope.blurTriggerFn = function(e) {
			e.preventDefault();

			vm.count = 0;

			var intervalHandler = $interval(function() {
				$timeout(function() {
					vm.count ++;
				});

				if(vm.count > (vm.debounceTime / 1000)) {
					$interval.cancel(intervalHandler);
				}
			}, 1000);

		};

		// 使用 $rollbackViewValue 方法
		$scope.withRollback = function(e) {
			e.preventDefault();
			var $elem = $scope.form.test1;

			if(e.keyCode === 13) {
				$elem.$rollbackViewValue();
			}
		};

		// 不使用 $rollbackViewValue 方法
		$scope.withoutRollback = function(e) {
			e.preventDefault();

			var $elem = $scope.form.test2;
			if(e.keyCode === 13) {
				angular.noop();
			}
		};

	}
]);