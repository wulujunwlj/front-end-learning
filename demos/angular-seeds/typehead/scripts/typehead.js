// (function(angular) {
// 	'use strict';
// 	angular.element(document).ready(function() {
// 		angular.bootstrap(document);
// 	});
// }(angular));

(function(angular) {
	'use strict';

	angular.module('typehead', [])
		.controller('mainCtrl', ['$scope', 
			function($scope) {
				var vm = $scope.vm = {};

				vm.artists = [
					{
						name: 'abc'
					}, {
						name: 'xyz'
					}, {
						name: '123'
					}
				];
				vm.exp = 'abc123xyz';
			}
		])
		.directive('direct', ['$http', function($http){
			var directObj = {
				restrict: 'AECM',
				template: 
					'<div>' + 
						'<a href="http://www.google.com">Google</a>' + 
					'</div>'
			};

			return directObj;
		}])
		.directive('typehead', ['$http', 
			function($http) {
				/*
				return {
					// name: '',
					// priority: 1,
					// terminal: true,
					// scope: {}, // {} = isolate, true = child, false/undefined = no change
					// controller: function($scope, $element, $attrs, $transclude) {},
					// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
					// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
					// template: '',
					// templateUrl: '',
					// replace: true,
					// transclude: true,
					// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
					link: function($scope, iElm, iAttrs, controller) {
						
					}
				};
				*/
				var directObj = {
					restrict: 'E',
					template: 
						'<div>' + 
							'<form>' + 
								'<input type="text" autocomplete="off" ng-keyup="typeheadKeyup($event)"/>' + 
							'</form>' + 
							'<div ng-transclude></div>' + 
						'</div>',
					transclude: true,
					replace: true,
					compile: function(tElement, tAttrs) {
						return this.link;
					},
					controller: function($scope, $element, $attrs, $transclude) {
						//
					},
					link: function($scope, iElem, iAttrs, controller) {
						$scope.typeheadKeyup = function(evt) {
							// 
						}
					}
				};

				return directObj;
			}
		])
		.directive('typeheadItem', ['$http', 
			function($http) {
				var directObj = {
					restrict: 'E',
					template: '',
					require: '^typehead',
					compile: function(tElement, tAttrs) {
						return this.link;
					},
					controller: function($scope, $element, $attrs, $transclude) {
						this.activate = function(item) {
							//
						}
					},
					link: function($scope, iElem, iAttrs, controller) {
						var item = $scope.$eval(iAttrs.typeheadItem);

						$scope.$watch(function() {
							return controller.isActive(item);
						}, function(active) {
							if(active) {
								iElem.addClass('active');
							} else {
								iElem.removeClass('active');
							}
						});

						iElem.bind('mouseenter', function(evt) {
							$scope.$apply(function() {
								controller.activate(item);
							});
						});

						item.bind('click', function(evt) {
							$scope.$apply(function() {
								controller.select(item);
							});
						})
					}
				};

				return directObj;
			}
		]);
}(angular));