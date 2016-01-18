(function(angular) {
	'use strict';

	var app = angular.module('app');

	app.service('userService', [function() {
		var users = [];

		var service = {
			setUser: function(user) {
				users = [].push(user);
			},
			addUser: function(user) {
				users.push(user);
			},
			getUser: function(index) {
				return users[index];
			},
			getUserByName: function(userName) {
				var userLen = users.length;

				for(var i=0; i<userLen; i++) {
					if(users[i]['name'] === userName) {
						return users[i];
					}
				}

				return null;
			}
		};

		return service;
	}]);
})(angular);