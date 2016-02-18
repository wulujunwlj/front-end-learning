Async JavaScript - Build More Responsive Apps with Less Code
=====
JavaScript 异步编程 - 设计快速响应的网格应用
=====

## 前言
* 参考资料：
    - <<黑客与画家>> 中关于 JS 的论断
    - 2007年，Jeff Atwood 炮制出所谓的 Atwood 法则：任何可以用 JavaScript 写成的应用最终都会用 JavaScript 写
    - 
* 一般认为 JS 是可以利用事件模型处理异步触发任务的单线程语言。
* 金字塔厄运
```JS
step1(function(result1) {
    steip2(function(result2) {
        step3(function(result3) {
            // and so on...
        })
    })
})
```

* JS 学习资源：
    - Codecademy
    - CoseSchool - jQuery 空中课堂
    - Eloquent JavaScript by Marijn Harverbeke
    - JavaScript Garden
    - MDN(Mozilla Developer Network)
* 书中代码格式
```
$('#container > ul li.inactive')
.slideUp();

var $paragraphClone = $('p:last')
  .clone();

$('h1')
  .first()
  .addClass('first')
.end()
  .last()
  .addClass('last');
```

    - 缩进为两个空格
    - 标识符遵循驼峰式大小写命名惯例
    - 每个表达式的末尾使用分号，但函数定义除外
    - 对函数调用采用特殊的缩进规则：当且仅当调用链中的两个函数返回同一个对象时，才使用相同的缩进


## 第1章 深入理解 JavaScript 事件
* 计时器函数 setTimeout 和 setInterval
    - 当同一个 JavaScript 进程正运行着代码时，任何 JavaScript 计时函数都无法使其他代码运行起来
    - 不确定性
### 1.3 异步函数的编写
* JavaScript 中的每个异步函数都构建在其他某个或某些异步函数之上。凡是异步函数，从上到下(一直到原生代码)都是异步的
* 反之：任何函数只要使用了异步的函数，就必须以异步的方式给出其操作结果
* 

### 1.6 小结
* PubSub 模式是一种将回调赋值给已命名事件的回调组织方式；而 Promise 对象是一种表示一次性事件的直观对象
* 

## 第2章 分布式事件
* 分布式事件：事件的蝴蝶偶然扇动了翅膀，整个应用导出都引发了反应
* PubSub(Publish/Subscribe，发布/订阅模式)
* 只要对象带有 PubSub 接口，就可以称之为事件化对象
* 如果每次有个对象上的事件引发了一系列事件并最终对这个对象本身触发了相同的事件，则结果就是事件循环。如果这种事件循环还是同步的，那就造成了堆栈上溢
* PubSub 模式尤其不适用于一次性事件，一次性事件要求对异步函数执行的一次性任务的两种结果(完成任务或任务失败)做不同的处理

## 第3章 Promise 对象和 Deferred 对象
* Promise 对象代表一项有两种可能结果(成功或失败)的任务，它还持有多个回调，出现不同结果时会分别处罚响应的回调

### 3.2 生成 Promise 对象
* Deferred 就是 Promise。更准确的说，Deferred 是 Promise 的超集，它比 Promise 多了一项关键特性：可以直接触发。纯 Promise 实例只允许添加多个调用，而且必须由其他什么东西来触发这些调用。使用 resolve(执行)方法和 reject(拒绝)方法均可触发 Deferred 对象
```
var promptDeferred = new $.Deferred();
promptDeferred.always(function() {
  console.log('A choice was made:');
});
promptDeferred.done(function() {
  console.log('Starting game...');
});
promptDeferred.fail(function() {
  console.log('No game today...');
});
```

* 每个 Deferred 对象都含有一个 Promise 对象，每个 Promise 对象都代表着一个 Deferred 对象。有了 Deferred 对象，就可以控制其状态，而有了纯 Promise 对象，只能读取其状态及附加回调

### 3.3 向回调传递数据
* 

### 3.4 进度通知
* Promise 对象接收3种回调形式：done,fail 和 progress
  - 执行 Promise 对象时，运行的是 done 回调
  - 拒绝 Promise 对象时，运行的是 fail 回调
  - 对处于挂起状态的 Deferred 对象调用 notify 时，运行的是 progress 回调
* 

## 第4章 Async.js 的工作流控制

## 第5章 worker 对象的多线程技术

## 第6章 异步的脚本加载

## 附录 JavaScript 的编辑工具