Grunt.js Cookbook
=====
[Grunt 插件使用汇总](http://www.cnblogs.com/haogj/p/4898349.html)

## chapter1:Get started with Grunt
* Gruntfile.js 文件结构
```
module.exports = function (grunt) {
    grunt.initConfig({});
    grunt.registerTask('default', []);
};
```

* When the Grunt CLI tool is used,it always looks for the nearest file named Gruntfile.js,from which it then attempts to load configurations.
* The argument of exported function is an object that provides us with access to the Grunt framework to load,create,and configure tasks.
* Default task is set to do nothing,so running the grunt command did nothing except report that it was successfully completed.
* 

### demo:contrib-jshint([jshint](http://jshint.com/docs/))
* npm install --save-dev grunt
* npm install --save-dev grunt-contrib-jshint

## chapter2.File Management

## chapter3.Templating Engines

## chapter4.Generating CSS and JavaScript

## chapter5.Running Automated Tests

## chapter6.Deployment Preparations

## chapter7.Deploying to the End User

## chapter8.Creating Custom Tasks

## chapter9.Authoring Plugins

## chapter10.Static Sites