'use strict';

angular.module('app', [])
	.directive('log', [function() {
		return {
			controller: function($scope, $element, $attrs, $transclude) {
				console.log($attrs.log + '(in controller)');
			},
			compile: function(tElem, tAttrs) {
				console.log(tAttrs.log + '(in compile)');

				return {
					pre: function preLink(scope, elem, attrs) {
						console.log(attrs.log + '(in preLink)');
					},
					post: function postLink(scope, elem, attrs) {
						console.log(attrs.log + '(in postLink)');
					}
				}
			}
		}
	}])
	.controller('compileCtrlLinkCtrl', ['$scope', 
		function($scope) {
			
		}
	]);
