
## AngularJs directive - scope 选项与绑定策略   

from:http://www.linuxidc.com/Linux/2015-05/116924.htm

keywords: `angularjs` `directive` `scope` `bind-strategy` `=` `&` `@`   

### scope 属性的作用：   
scope: {} 使指令与外界隔离开来，使其模板处于 non-inheriting 状态，除非使用了 transclude 插入。   

### 绑定策略：   
* &:对父级作用域进行绑定，并将其中的`属性`包装成一个函数。[`任何属性都会被包装成一个函数`：对于字符串、对象、数组、无参函数，会被包装成一个无参函数；对于有参函数，就需要传入一个`参数属性为key所对应的对象`]   
* =   
* @   
	```js

	'use strict';

	var app = angular.module('demoApp', []);

	app.controller('bindStrategyDemoCtrl', ['$scope', 
		function ($scope) {
			var vm = $scope.vm = {
				max: 15,
				min: 5
			};

			$scope.callbackFn = function(data) {
				console.log('data-->', data);
			};

		}
	]);

	app.directive('myDirect', [function () {
		return {
			restrict: 'A',
			scope: {
				max: '=',
				min: '@',
				bindFn: '&'
			},
			template: '<button type="button" ng-click="changeMax()">改变max属性</button>' + 
				'<button type="button" ng-click="changeMin()">改变min属性</button>' + 
				'<button type="button" ng-click="testBindFn()">bindFn</button>',
			link: function (scope, iElement, iAttrs) {
				console.log(typeof scope.max);
				console.log(typeof scope.min);

				// 改变 max 属性
				scope.changeMax = function() {
					scope.max = 50;
				};

				// 改变 min 属性
				scope.changeMin = function() {
					scope.min = 1;
				};

				// bind function
				scope.testBindFn = function() {
					if(angular.isFunction(scope.bindFn)) {
						(scope.bindFn)({user: { 'name': 'username', 'age': 15 }});
					}
				};

			}
		};
	}]);
	```

	```html   

	<div ng-app="demoApp" ng-controller="bindStrategyDemoCtrl">
		<div my-direct="" max="vm.max" min="{{ vm.min }}" bind-Fn="callbackFn(user)"></div>

		<div>
			<pre ng-bind="vm | json"></pre>
		</div>
	</div>

	```   