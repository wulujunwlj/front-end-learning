
## AngularJs directive - scope 选项与绑定策略   

参考:http://www.linuxidc.com/Linux/2015-05/116924.htm

keywords: `angularjs` `directive` `scope` `bind-strategy` `=` `&` `@`   

### scope 属性的作用：   
> scope: {} 使指令与外界隔离开来，使其模板处于 non-inheriting 状态，除非使用了 transclude 插入。   

### 绑定策略：   
* &:对父级作用域进行绑定，并将其中的`属性`包装成一个函数。[`任何属性都会被包装成一个函数`：对于字符串、对象、数组、无参函数，会被包装成一个无参函数；对于有参函数，就需要传入一个`参数属性为key所对应的对象`]   
* =:父级作用域与指令内部进行双向绑定；   
* @:父级作用域与指令内部进行单项绑定，并且指令内部取得的值为 `string` 类型。   

```js   

'use strict';

var app = angular.module('demoApp', []);

app.controller('bindStrategyDemoCtrl', ['$scope', 
	function ($scope) {
		var vm = $scope.vm = {
			max: 15,
			min: 5,
			arr: [{'name': 'abc', 'age': 8}, {'name': 'xyz', 'age': 18}]
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
			min: '@',			// always string
			bindFn: '&',
			getMax: '&',
			getMin: '&',
			getArr: '&'
		},
		template: '<button type="button" ng-click="changeMax()">改变max属性</button>' + 
			'<button type="button" ng-click="changeMin()">改变min属性</button>' + 
			'<button type="button" ng-click="testBindFn()">bindFn</button>',
		link: function (scope, iElement, iAttrs) {
			console.log('max-->', scope.max, '; typeof max-->', typeof scope.max);
			console.log('min-->', scope.min, '; typeof min-->', typeof scope.min);

			scope.fnMax = scope.getMax();
			scope.fnMin = scope.getMin();

			console.log('fnMax-->', scope.fnMax, '; fnMin-->', scope.fnMin);
			console.log(scope.getArr());

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

<div my-direct="" max="vm.max" min="{{ vm.min }}" get-max="vm.max" get-min="vm.min" get-arr="vm.arr" bind-Fn="callbackFn(user)"></div>

```   
### 易错点   
* 使用 @ 绑定时，指令内部得到的数据类型永远是 `string` 类型。如果直接绑定模型的一个属性时，只能得到对应的属性名称字符串，可以修改成 {{}} 表达式形式；   
* 使用 & 绑定时，业务 HTML 代码中的属性值可以是一个表达式或者一个方法，如果是一个表达式，则类似于一个`返回该表达式计算结果的方法`；   
* 使用 = 绑定一般用于`指令内部修改后的值同步到调用业务所对应的页面上`。   