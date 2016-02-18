Services
=====

Angular 的服务是通过使用 DI 绑在一起的可替换对象。你可以使用服务来在 app 中组织和分享代码。

Angular 的服务是：
    * 延迟实例化的 - 只有当应用组件依赖于它时 Angular 才会实例化这个服务
    * 单例的 - 每个组件依赖的服务都是由 service 工厂生成的单个实例的引用

Angular 提哦拱了几个有用的服务(比如 $http)，但是对于大多数应用来说，你会需要创建自己的服务。

Note:正如其他核心 Angular 标识符一样，内置的 services 总是以 $ 开头。(比如 $http)

## 使用 services
为了使用 service，你需要把它作为组件(controller、service、filter、directive)的依赖。Angular 的依赖注入子系统会做剩下的事情。

## creating services

### registering services
services 通过 Module API 注册在模块中。特别的，可以使用 Module 中 factory API 来注册服务
```
var myModule = angular.module('myModule', []);
myModule.factory('serviceId', function() {
    var shinyNewServiceInstance;

    return shinyNewServiceInstance;
});
```

注意你并不是注册一个 service instance，而是一个调用时创建这个实例的 factory function 。

### dependencies
services 也可以拥有自己的依赖项。正如 controller 中的依赖声明方式一样，你可以通过在服务的工厂方法参数中指定它们来声明依赖。

关于依赖的更多信息，请参考 [dependency injection] 文档。

下面的实例模块有两个服务，每一个都有多个依赖。
```
var batchModule = angular.module('batchModule', []);

/**
 * The `batchLog` service allows for messages to be queued in memory and flushed
 * to the console.log every 50 seconds.
 *
 * @param {*} message Message to be logged.
 */
batchModule.factory('batchLog', ['$interval', '$log', function($interval, $log) {
  var messageQueue = [];

  function log() {
    if (messageQueue.length) {
      $log.log('batchLog messages: ', messageQueue);
      messageQueue = [];
    }
  }

  // start periodic checking
  $interval(log, 50000);

  return function(message) {
    messageQueue.push(message);
  }
}]);

/**
 * `routeTemplateMonitor` monitors each `$route` change and logs the current
 * template via the `batchLog` service.
 */
batchModule.factory('routeTemplateMonitor', ['$route', 'batchLog', '$rootScope',
  function($route, batchLog, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function() {
      batchLog($route.current ? $route.current.template : null);
    });
  }]);
```

示例中，我们可以注意到：
* batLog service 依赖于内置的 $interval 和 $log service
* routeTemplateMonitor service 依赖于内置的 $route 和自定义的 batchLog service
* 两个 service 都使用了数组来声明各自的依赖
* 数组中标识符的顺序跟factory 方法的参数名称顺序一致

### 使用 $provide 注册 sevice
你也可以通过在模块中的 config 方法中使用 $provide service 来注册 services。
```
angular.module('myModule', [])
    .config(['$provide', function($provide) {
        $provide.factory('serviceId', function() {
            var shinyNewServiceInstance;
            // 
            return shinyNewServiceInstance;
        })
    }]);
```

这项技术经常在单元测试中被用来 mock out 服务的依赖项。

## Unit testing


