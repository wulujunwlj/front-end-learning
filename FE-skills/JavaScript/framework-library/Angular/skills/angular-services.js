(function(angular) {
	angular.module('app', [])
		// constant 用于做配置信息，设置的值 value 是不能被改变的，可以接受基础类型和 object 对象
		.constant('appConfig', {
			name: 'demo',
			version: '0.01'
		})
		// 与 constant 类似，但是在赋值后还可以被改变
		.value('bizConfig', {
			name: 'hr',
			description: 'Human Resource'
		})
		// factory 会返回一个 object 对象
		.factory('foo', function() {
			var thisIsPrivate = 'Private';

			function getPrivate() {
				return thisIsPrivate;
			}

			return {
				thisIsPublic: 'Public',
				getPrivate: getPrivate
			};
		})
		// service 和 factory 的工作原理一样，只是它接受的是一个构造函数，当第一次使用时，Angular 会调用 new Foo() 来初始化这个对象
		/*
		app.factory('foo2', function() {
			return new Foobar();
		});
		function Foobar() {
			var thisIsPrivate = 'Private';

			this.thisIsPublic = 'Public';
			this.getPrivate = function() {
				return thisIsPrivate;
			};
		}
		 */
		}
		.service('foo2', function() {
			var thisIsPrivate = 'Private';

			this.thisIsPublic = 'Public';
			this.getPrivate = function() {
				return thisIsPrivate;
			};
		})
		// provider 带有一个 $get 方法，其返回值将会被注入其他应用组件。当注入 foo3 到 controller，实际注入的是 $get 方法
		.provider('foo3', function() {
			return {
				$get: function() {
					var thisIsPrivate = 'Private';

					function getPrivate() {
						return thisIsPrivate;
					}

					return {
						thisIsPublic: 'Public',
						getPrivate: getPrivate
					}
				}
			}
		})
}(angular));