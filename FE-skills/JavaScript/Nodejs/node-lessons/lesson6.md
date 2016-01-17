# 测试用例：mocha，should，istanbul
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson6)

* 后端脚本单元测试
* npm install -g [package]
    - -g:global，全局安装对应的包，如果包有可执行命令的话，则这个命令也会自动加入到系统 $PATH 的某个地方
    - 非 -g:安装包在项目目录下面
* 全局安装 mocha 后，直接在根目录下执行 `mocha`
* 问题：`istanbule cover _mocha` 的覆盖测试没有跑通(？)
* 用到的依赖
    - 测试框架：[mocha](http://mochajs.org)
    - 断言库：[should](https://github.com/tj/should.js)
    - 测试率覆盖工具：[istanbul](https://github.com/gotwarlost/istanbul)
    - [Makefile](http://blog.csdn.net/haoel/article/details/2886)