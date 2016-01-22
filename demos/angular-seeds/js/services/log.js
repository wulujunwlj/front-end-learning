(function(angular) {
	'use strict';

	var servicesCommon = angular.module('app.services.common', []);

	var MyConsole = (function() {
		function MyConsole($injector) {
			this.lines = [];
			this.rootScope = false;
			this.writeLn = this.lazyRootCheckFn;
			this.injector = $injector;
		}

		MyConsole.prototype.pushFn = function(message) {
			this.lines.push(message);
		};

		MyConsole.prototype.lazyRootCheckFn = function(message) {
			this.pushFn(message);
			if(!this.rootScope && this.injector.has('$rootScope')) {
				this.rootScope = true;
				this.injector.get('$rootScope').console = this.lines;
				this.writeLn = this.pushFn;
			}
		};

		MyConsole.$inject = ['$injector'];

		return MyConsole;
	});

	angular
		.module('app.services.common')
		.service('userService', [function() {
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

	angular
		.module('app.services.common')
		.service('myConsole', MyConsole)
		.config(['$provide', 
			function($provide) {
				$provide.decorator('$log', ['$delegate', 'myConsole', 
					function($delegate, myConsole) {
						var swap = function(originalFn) {
							return function() {
								var args = [].slice.call(arguments);
								angular.forEach(args, function(value, index) {
									myConsole.writeLn(value);
								});
								originalFn.apply(null, args);
							};
						};

						$delegate.warn = swap($delegate.warn);
						$delegate.error = swap($delegate.error);
						$delegate.info = function(msg) {
							console.log('This is ', msg);
						}

						console.log('in log decorator');
						return $delegate;
					}
				]);
			}
		])
		// .config(['$provide', 
		// 	function($provide) {
		// 		$provide.decorator('userService', ['$delegate', 
		// 			function($delegate) {
		// 				$delegate.test = function() {
		// 					console.log('This is the userService test...');
		// 				};
		// 				return $delegate;
		// 			}
		// 		]);
		// 	}
		// ]);
})(angular);