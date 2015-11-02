Angular Services   
==================

## 服务

Angular 服务是一些通过依赖注入绑定在一起的可替代的对象。你可以在应用中使用服务来组织和分享代码。   

Angular 的服务是：   
> - 延迟初始化的 - Angular 只会在应用的组件依赖这个服务时才会去初始化；
> - 单例的 - 依赖服务的所有组件都是服务工厂产生的单个实例的一个引用。     

Angular 提供了几个有用的服务(例如 $http)，但是对于大多数应用来说，你也需要创建自己的服务。

    `注意：就像其他核心Angular的标识符一样，内置的服务总是以$ 开始(例如 $http)`

## 使用服务
为了使用服务，你需要在组件(控制器、服务、过滤器、或者指令)中增加依赖。Angular 的依赖注入子模块会处理其他的。

## 创建服务
应用开发者可以通过注册服务的名称和服务工厂方法来在 Angular 模块下定义他们自己的服务。
服务工厂方法产生单个对象或者方法为应用的其他部分服务。服务返回的对象或者方法可以被注入任何模块(控制器、服务、过滤器或者指令)来表示依赖于这个服务。

## 注册服务
服务通过 Module API 被注册在服务上。典型的，你会使用 Module#factory API 来注册服务：
	```   
	var myModule = angular.module('myModule', []);
	myModule.factory('serviceId', [function(){
		var shinyNewServiceInstance;

		return shinyNewServiceInstance;
	}]);
	```
注意你并不是注册了一个服务实例，而是一个会在被调用时创建这个实例的工厂方法。

## 依赖
服务可以有自己的依赖。就像在控制器中声明依赖一样，你可以通过在服务工厂方法签名中指定它们来声明依赖。

更多关于依赖的信息，请查看 dependency injection 文档。

下面的实例模块有两个服务，每一个都有不同的依赖：
	```
	var batchModule = angular.module('batchModule', []);

	batchModule.factory('batchLog', ['$interval', '$log', function($interval, $log) {
		var messageQueue = [];

		function log() {
			if(messageQueue.length) {
				$log.log('batchLog messages: ', messageQueue);
				messageQueue = [];
			}
		}

		$interval(log, 5000);

		return function(message) {
			messageQueue.push(message);
		}
	}]);

	batchModule.factory('routeTemplateMonitor', ['$route', 'batchLog', '$rootScope', 
		function($route, batchLog, $rootScope) {
			$rootScope.$on('$routeChangeSuccess', function() {
				batchLog($route.current ? $route.current.template : null);
			});
		}
	])
	```
在这个例子中，注意：

> - batchLog 服务依赖于内置的 $interval 和 $log 服务；
> - routeTemplateMonitor 服务依赖于内置的 $route 服务和自定义的 batchLog 服务；
> - 这两个服务都使用了数组符号的方式来声明它们的依赖；
> - 数组中标识符的顺序和工厂方法中参数名称的顺序一致

## 用 $provide 注册一个服务

你也可以通过使用 $provide 来在模块的 `config` 方法中 注册服务：
```
angular.module('myModule', [])
	.config(['$provide', 
		function($provide) {
			$provide.factory('serviceId', [function(){
				var shinyNewServiceInstance;

				return shinyNewServiceInstance;
			}]);
		}
	]);
```
这种技术通常用来在单元测试中模拟服务的依赖。

## 单元测试

下面是一个上面示例中的 `Creating Angular Service` 中的 `notify` 服务的单元测试。这个单元测试示例使用了 Jasmine 模拟而不是使用真实的浏览器提示。
```
var mock, notify;
beforeEach(function() {
	mock = { alert: jasmine.createSpy() };

	module(function($provide) {
		$provide.value('$window', mock);
	});

	inject(function($injector) {
		notify = $injector.get('notify');
	});
});

it('should not alert first two notifications', function() {
	notify('one');
	notify('two');

	expect(mock.alert).not.toHaveBeenCalled();
});

it('should alert all after third notification', function {
	notify('one');
	notify('two');
	notify('three');

  	expect(mock.alert).toHaveBeenCalledWith("one\ntwo\nthree");
});

it('should clear messages after alert', function() {
	notify('one');
	notify('two');
	notify('third');
	notify('more');
	notify('two');
	notify('third');

	expect(mock.alert.callCount).toEqual(2);
	expect(mock.alert.mostRecentCall.args).toEqual(["more\ntwo\nthird"]);
});
```

## 相关话题

AngularJS 中的依赖注入

## 相关 API

Angular Service API
Injector API

