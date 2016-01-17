# 浏览器端测试：mocha，chai，phantomjs
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson7)

* 前端脚本单元测试的问题
    - 运行环境应当在浏览器中，可以操纵浏览器的 DOM 对象，且可以随意定义执行时的 HTML 上下文
    - 测试结果应当可以直接反馈给 mocha，判断测试是否通过
* 搭建测试原型
    - cd lesson7 && mkdir vendor && cd vendor
    - npm i -g mocha    # 安装全局的 mocha 命令行工具
    - mocha init .      # 在当前目录生成脚手架
* 测试过程(?)
* 用到的依赖
    - 前后端通用测试框架：[mocha](http://mochajs.org/)
    - 全栈的断言库：[chai](http://chaijs.com/)
    - headless 浏览器[phantomjs](http://phantomjs.org/)