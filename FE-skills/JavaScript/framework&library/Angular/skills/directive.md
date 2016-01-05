
# AngularJS 中的 directive
http://www.cnblogs.com/rohelm/p/4051437.html
* 完整参数
```JS
angular.module('app', [])
	// 插件生成
	.directive('', ['', function(){
		// Runs during compile
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
	}]);
	// 所有参数
	.directive('myDirective', ['$rootScope', 
		function($rootScope) {
			return {
				restrict: String,
				priority: Number,
				terminal: Boolean,
				template: String or Template Function: function(tElement, tAttrs) { ... },
				templateUrl: String,
				replace: Boolean or String,
				scope: Boolean or Object,
				transclude: Boolean,
				controller: String or Function: function(scope, element, attrs, transclude, otherInjectables) { ... },
				controllerAs: String,
				require: String,
				link: function(scope, iElements, iAttrs) { ... },
				compile: Function: function(tElement, tAttrs, transclude) {
					return {
						pre: function(scope, iElement, iAttrs, controller) { ... },
						post: function(scope, iElement, iAttrs, controller) { ... }
					}
					or 
					return function postLink(...) {
						...
					}
				}

			};
		}
	]);
```

* 参数列表：
    - restrict[String]:

* 