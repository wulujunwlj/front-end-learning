(function(angular) {
	'use strict';	

	var app = angular.module('app.services.common');

	app.service('dataService', ['$http', '$q', 
		function($http, $q) {
			var deferred = $q.defer();
			var service = {
				getData: function(url) {
					$http.get(url)
						.success(function(data, status, headers, config) {
							deferred.resolve(data);
						})
						.error(function(data, status, headers, config) {
							deferred.reject(data);
						})

					return deferred.promise;
				},
				postData: function(url, params) {
					$http.post(url, params)
						.success(function(data, status, headers, config) {
							deferred.resolve(data);
						})
						.error(function(data, status, headers, config) {
							deferred.reject(data);
						})

					return deferred.promise;
				}
			};

			return service;
		}
	]);
})(angular);