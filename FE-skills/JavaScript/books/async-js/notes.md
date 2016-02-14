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
* 

## 第3章 Promise 对象和 Deferred 对象

## 第4章 Async.js 的工作流控制

## 第5章 worker 对象的多线程技术

## 第6章 异步的脚本加载

## 附录 JavaScript 的编辑工具