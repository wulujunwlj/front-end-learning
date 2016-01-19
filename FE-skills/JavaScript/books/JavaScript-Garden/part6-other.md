# JavaScript 秘密花园

[来源](http://bonsaiden.github.io/JavaScript-Garden/zh/#other)

## 其他

### setTimeout 和 setInterval
* 由于 JS 是异步的，可以使用 `setTimeout` `setInterval` 来计划执行函数
* setTimeout 被调用时，会返回一个 ID 标识并且计划在将来执行
* 基于 JS 引擎的计时策略，以及本质上的单线程运行方式，所以其他代码运行可能会阻塞此线程。因此没法确保函数会在 `setTimeout` 指定的时刻被调用
* 作为第一个参数的函数将会在全局作用域中执行，`this` 将会指向全局对象
```
function Foo() {
    this.value = 42;

    this.method = function() {
        console.log(this.value);
    };

    setTimeout(this.method, 500);
}

new Foo();

// setInterval 的堆调用
function foo() {
    // 阻塞 1 s
}
setInterval(foo, 100);
```

* setInterval 的堆调用：当回调函数的执行被阻塞时，`setInterval` 会发布更多的回调指令，在很小的定时间隔情况下，会导致回调函数被堆积起来。解决办法：回调函数内部使用 `setTimeout` 函数。
* 手工清除定时器:clearTimeout(id),clearInterval(id);
