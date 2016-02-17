Promise
=====

## 其他资料
* [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [babel]()
* [jQuery deferred]()
* [Angular $q,$http]()
* [自定义Angular插件 - 网站用户引导](http://greengerong.com/blog/2015/10/18/angular-wang-zhan-yong-hu-yin-dao-cha-jian/)

## callback hell(回调地狱)
```
asyncTask1(data, function(data1) {
    asyncTask2(data, function(data2) {
        asyncTask3(data, function(data3) {
            // 
        })
    })
})
```

## Promise/A+ 规范
```
asyncTask1(data)
    .then(function(data1) {
        return asyncTask2(data1);
    })
    .then(function(data2) {
        return asyncTask3(data2);
    });
```

* Promise 对象有三种状态：
    - Pending - Promise 对象的初始状态，等待任务的完成或者被拒绝；
    - Fulfilled - 任务执行完成并且成功的状态
    - Rejected - 任务执行完成并且失败的状态
* Promise 的状态只能从 Pending 状态转换到 Fulfilled 状态或者 Rejected 状态，而且不能逆向转换，同时，Fulfilled 状态和 Rejected 状态也不能相互转换
* Promise 对象必须实现 then 方法，then 是 promise 规范的核心，而且 then 方法也必须返回一个 Promise 对象，同一个 promise 对象可以注册多个 then 方法，并且回调的执行顺序跟它们的注册顺序一致
* then 方法接受两个回调函数，分别为：成功时的回调和失败时的回调。并且分别在Promise 由 pending 状态转换到 fulfilled 状态时和在 promise 由 pending 状态转换到 rejected 状态时被调用

## promise 的使用
```
// 串行处理
$http.get('/demo1')
    .then(function(data) {
        console.log('demo1', data);
        return $http.get('/demo2', { params: data.result });
    })
    .then(function(data) {
        console.log('demo2', data);
        return $http.get('/demo3', { params: data.result });
    })
    .then(function(data) {
        console.log('demo3', data);
    });

// 并行处理
$q.all([
        $http.get('/demo1'),
        $http.get('/demo2'),
        $http.get('/demo3')
    ])
    .then(function(results) {
        console.log('result1', results[0]);
        console.log('result2', results[1]);
        console.log('result3', results[2]);
    });

    // 同步数据的 promise 处理
    var data = $window.localStorage.getItem('data-api-key');
    return $q.when(data);

    // 延迟任务
    $modal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalController',
        controllerAs: 'modal',
        resolve: {
            //
        }
    })
        .result
        .then(function ok(data) {
            //
        }, function cancel(reason) {
            //
        });

    function open(data) {
        var defer = $q.defer();
        var promise = defer.promise;

        promise.ok = function(func) {
            promise.then(func);
            return promise;
        };

        promise.cancel = function(func) {
            promise.then(null, func);
            return promise;
        }

        return promise;
    }

    // 访问 open
    $modal.open(item)
        .ok(function(data) {
            //
        })
        .cancel(function(data) {
            //
        });
```

* 回调地狱变成链式调用，从横向式增加巧妙的变为了纵向增长。以链式的风格，纵向的书写，使得代码更加的可读和易于维护。
* promise 是可以传递的(多个任务的串行处理，每个 then 方法返回下一个 promise)
* $q.all (任务之间没有依赖关系时，采用并行处理，返回结果和 all 的参数一一对应)
* 对于同步数据的 promise 处理，统一调用接口
* 对于延迟任务的 promise DSL 语义化封装
* 利用 promise 实现管道式 AOP 拦截

### AOP(Aspect-Oriented-Programming:面向切面编程)
* 通过编译时（Compile）植入代码、运行期（Runtime）动态代理、以及框架提供管道式执行等策略实现程序通用功能与业务模块的分离，统一处理、维护的一种解耦设计。 AOP是OOP的延续，是软件开发中的一个热点，也是很多服务端框架（如Java世界的Spring）中的核心内容之一，是函数式编程的一种衍生范型。 利用AOP可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高开发效率。 AOP实用的场景主要有：权限控制、日志模块、事务处理、性能统计、异常处理等独立、通用的非业务模块。
* Angular 中的拦截器(interceptors)和装饰器($provide.decorator)
