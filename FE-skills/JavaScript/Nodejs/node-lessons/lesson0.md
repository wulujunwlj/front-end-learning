
# 搭建 Node.js 开发环境
[来源](https://github.com/alsotang/node-lessons/tree/master/lesson0)

* 安装 nvm(**Node Version Manger**)，用于切换 Node 版本
```
$curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh | bash
```
* 安装 Node.js
``` 
nvm install 0.12 
nvm ls
num use 0.12
```
* 开启新的 shell 窗口时，找不到 node 命令
    1. shell 不知道 nvm 的存在
    2. nvm 已经存在，但是没有 default 的 Node.js 版本可用 
* 