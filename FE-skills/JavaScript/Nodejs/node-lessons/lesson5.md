# 使用 async 控制并发
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson5)

* 修改程序逻辑，控制并发连接数为5个
* eventproxy 与 async 的区别
    - 当需要去多个源(一般是小于10个)汇总数据的时候，使用 eventproxy 方便
    - 当需要用到队列，需要控制并发数，或者喜欢函数式变成思维时，使用 async
* 
* 使用的依赖
    - [async](https://github.com/caolan/async)
    - [demo](https://github.com/alsotang/async_demo)