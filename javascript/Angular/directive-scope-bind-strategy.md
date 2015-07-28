
## AngularJs directive - scope 选项与绑定策略   

from:http://www.linuxidc.com/Linux/2015-05/116924.htm

keywords: `angularjs` `directive` `scope` `bind-strategy` `=` `&` `@`   

### 绑定策略：   
- &   
- =   
- @   
	```js

	// directive
	app.directive('directParam', function() {
		return {
			restrict: 'ECMA',
			template: '<div>指令中:{{ name }}</div>',
			scope: {
				name: '@forName'
			}
		}
	})
	// controller
	.controller('nameCtrl', ['$scope', 
		function($scope){
			$scope.name = '张三';
		}
	]);
	```

	```html   

	// html
	<span direct-param for-name="{{name}}"></span>

	```   