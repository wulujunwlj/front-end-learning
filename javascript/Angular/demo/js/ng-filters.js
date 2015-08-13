'use strict';

var app = angular.module('demoApp', []);

app.filter('capital', [
	function() {
		var filterFn = function(input) {
			if(angular.isUndefined(input)) {
				return '';
			} else {
				return input.toString().substr(0, 1).toUpperCase() + input.slice(1);
			}
		};

		return filterFn;
	}
]);

app.controller('ngFiltersCtrl', ['$scope', '$filter', 
	function($scope, $filter) {
		var vm = $scope.vm = {
			currency: -123,
			date: 3657413561000,
			filterObj: [
				{'name': 'abc', 'age': 3},
				{'name': 'xyz', 'age': 35},
				{'name': 'aaa', 'age': 18},
				{'name': 'bbb', 'age': 2},
			],
			searchKey: 'a',
			limitTo: 1234567890,
			lowercase: 'abced123123123AAAA',
			uppercase: 'abced123123123AAAA',
		};

		$scope.filterFn = function(input) {
			return (input['name'].indexOf(vm.searchKey) > -1 || input['age'].toString().indexOf(vm.searchKey) > -1);
		}

		console.log($filter('filter')(vm.filterObj, $scope.filterFn));

	}
]);