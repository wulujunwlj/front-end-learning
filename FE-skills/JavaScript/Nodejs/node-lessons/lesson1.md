# 一个最简单的 express 应用
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson1)

* npm(Node.js Package Manager)：Node.js 包管理器，可以自动管理包的依赖。类似于 PHP - Composor,python - eary_install/pip,ruby - gem
* Express 是 Node.js 的 web 框架，[官网](http://expressjs.com/)
* 端口：
    - 端口的作用：通过贷款口来区分出同一电脑内不同应用或进程，从而实现一条物理网线同时链接多个程序
    - 端口号是一个16位的 unit，所以范围为 1 到 65535(对于 TCP，port 0 被保留不能使用；对于 UDP,source 端的端口号是可选的，为0时表示无端口)
* URL 格式：<scheme>://<user>:<password>@<host>:<port>/<url-path> - <scheme>://<host>:<port>/<url-path>