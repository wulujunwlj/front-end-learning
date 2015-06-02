'use strict';

angular.module('myApp', [])
	.controller('MainController', ['$scope', '$timeout', 
		function($scope, $timeout){
			//
			$scope.date = {};

			var updateTime = function() {
				$scope.date.raw = new Date();
				$timeout(updateTime, 1000);
			};

			updateTime();
			
		}
	]);