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
### 1.1 事件的调度
* 如果想让 JS 中的某段代码将来再运行，可以将它放在回调中
* 运行回调时，称已触发某事件
* 解释代码:
```
for (var i = 1; i <= 3; i++) {
  setTimeout(function() { console.log(i); }, 0);
};
```

  - 变量 i 的作用域为整个函数
  - 循环结束后， i 的值为4
  - JS 事件处理器在线程空闲之前不会运行
* 调用 setTimeout 的时候，会有一个延时事件排入队列。当主线程没有任何代码时，JS 虚拟机会从事件队列中挑选事件，并调用此事件的处理器

### 1.2 异步函数的类型
* JS 环境提供的异步函数通常可以分为两大类：I/O 函数和计时函数
* JS 可以完美的实现非阻塞式 I/O
* 计时器函数 setTimeout 和 setInterval 的问题：
    - 当同一个 JavaScript 进程正运行着代码时，任何 JavaScript 计时函数都无法使其他代码运行起来
    - 不确定性
* 如果 setInterval 调度事件却延迟设定为 0 毫秒，则会尽可能频繁的运行此事件。在现代浏览器中，大约为 200 次/秒，在 Node 环境下，触发频率大约能达到 1000 次/秒，如果替换 setInterval 为 while 循环，在 Chrome 中触发频率为 400 万次/秒，在 Node 中会达到 500 万次/秒。HTML 规范推行的延时/时隔的最小值就是 4 毫秒
* 更细粒度的计时的方案：
  - Node 中，process.nextTick(超过10 万次/秒)
  - 现代浏览器中(包含 IE9+)，requestAnimationFrame 函数(使用 shim 或者不支持时才使用 setTimeout)
### 1.3 异步函数的编写
* JavaScript 中的每个异步函数都构建在其他某个或某些异步函数之上。凡是异步函数，从上到下(一直到原生代码)都是异步的
* 反之：任何函数只要使用了异步的函数，就必须以异步的方式给出其操作结果
* 异步函数：调用一个函数时，程序只在该函数返回之后才能继续
* JS 中的异步：这个函数会导致将来再运行另一个函数或者取自于事件队列。若后面这个函数是作为参数传递给前者的，则称其为回调函数，简称回调

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
* 工作流控制(也称作控制工作流)：消解异步代码中的套话
* npm install -g async step
* 

## 第5章 worker 对象的多线程技术
* 线程与进程的对比：同一个进程内的多个线程之间可以分享状态，而彼此独立的进程之间则不能

### 5.1 网页版 worker 对象


## 第6章 异步的脚本加载

## 附录 JavaScript 的编辑工具