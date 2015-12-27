
# Gulp
[from](http://www.ydcss.com/archives/18)

## 简介
* Gulp.js 是一个基于流的构建系统，主要优点是速度，效率和简化
* gulpfile.js
``` JS
var requireDir = require('require-dir');
// 载入所有 './gulp/tasks' 目录及子目录下的任务
requireDir('./gulp/tasks', { recurse: true });
```
* gulp 是基于 Nodejs 的自动任务运行器，能自动化的完成 javascript/coffee/sass/less/html/image/css 等文件的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。
* 实现上，借鉴了 Unix 操作系统的管道(pipe)思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单

## 安装
* 安装 Node.js
* 安装 npm
    - npm 安装插件
    npm install <name> [-g] [--save-dev]
    > -g：全局安装。安装在 'C:\Users\Administrator\AppData\Roaming\npm'，并且写入系统环境变量，可以通过命令行在任何地方调用它；非全局安装将会安装在当前定位目录的 'node_modules' 文件夹下，通过 require() 调用
    > --save：保存配置信息至 package.json 的 dependencies 节点。命令行 `npm install` 会根据 package.json 下载所有需要的包
    > -dev：保存至 package.json 的 devDependencies 节点
    - npm 卸载插件：注意不要直接删除本地插件包
    npm uninstall <name> [-g] [--save-dev]
    - npm 更新插件
    npm update <name> [-g] [--save-dev]
    - npm 查看帮助
    npm help
    - 查看当前目录已安装插件
    npm list
* 选装 cnpm
    - 关于 cnpm：因为 npm 安装插件是从国外服务器下载，受网络影响大，可能出现异常，淘宝团队建立了一个完整的 npmjs.org 镜像，同步频率为 10 minutes.
    - 安装：npm install cnpm -g --registry=https://registry.npm.taobao.org
    - 使用方式为：cnpm install <name>
* 全局安装 gulp
    - 安装 gulp 是为了通过它执行 gulp `任务`
    - cnpm install gulp -g
    - gulp -v
* 新建 package.json 文件
``` JS
{
  "name": "test",   //项目名称（必须）
  "version": "1.0.0",   //项目版本（必须）
  "description": "This is for study gulp project !",   //项目描述（必须）
  "homepage": "http://www.ydcss.com",   //项目主页
  "repository": {    //项目资源库
    "type": "git",
    "url": "https://git.oschina.net/xxxx"
  },
  "author": {    //项目作者信息
    "name": "surging",
    "email": "surging2@qq.com"
  },
  "license": "ISC",    //项目许可协议
  "devDependencies": {    //项目依赖的插件
    "gulp": "^3.8.11",
    "gulp-less": "^3.0.0"
  }
}
```
    - package.json 文件时基于 Node.js 项目必不可少的配置文件，位于项目根目录
    - 自动生成文件：cnpm init
* 本地安装 gulp 插件(`全局安装 gulp 是为了执行 gulp 任务，本地安装 gulp 是为了调用 gulp 插件的功能`)
    - cnpm install gulp-less --save-dev
    - cnpm install gulp --save-dev
* 新建 gulpfile.js 文件
``` JS
// 导入工具包 require('node_modules里对应的模块')
var gulp = require('gulp'), // 本地安装 gulp 所用到的地方
    less = require('gulp-less');

// 定义一个 testLess 任务
gulp.task('testLess', function() {
    gulp.src('src/less/index.less')     // 任务针对的文件
        .pipe(less())                   // 任务调用的模块
        .pipe(gulp.dest('src/css'));    // 任务生成的文件
});

gulp.task('default', ['testLess', 'elseTask']); // 定义默认任务
// gulp.task(name[, deps], fn) 定义任务 name:任务名称 deps:依赖任务名称 fn:回调函数
// gulp.src(globs[, options]) 执行任务处理的文件 globs:处理的文件路径(字符串或字符串数组)
// gulp.dest(path[, options]) 处理完后文件生成路径
```
    - gulpfile.js 是 gulp 项目的配置文件，是位于项目根目录的普通 js 文件
    - [完整插件配置](http://www.ydcss.com/archives/tag/gulp)
* 
## 使用
## 安装
