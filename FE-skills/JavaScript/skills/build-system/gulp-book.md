
# gulp-book
[地址](https://github.com/nimojs/gulp-book)

## 入门
* gulp 是基于 Node 实现 Web 前端自动化开发的工具
* 执行规律
    - 找到 js/ 目录下的所有 .js 文件
    - 压缩 js 文件
    - 将压缩后的代码另存在 dist/js 目录下
* 对应 gulp 代码
``` JS
// 压缩 script 文件
gulp.task('script', function() {
    // 找到
    gulp.src('js/*.js')
    // 压缩
        .pipe(uglify())
    // 另存
        .pipe(gulp.dest('dist/js'));
})
```
## 安装 Node 和 gulp
* Node 是一个基于 Chrome JavaScript V8 引擎建立的一个平台，可以利用它来实现 Web 服务
* 安装步骤
    - 安装 Node
    - 安装 npm(cnpm)：npm install -g gulp
## 使用 gulp 压缩 JS
* 操作步骤
    - 新建一个 gulpfile.js 文件
    ``` JS
    var gulp = require('gulp');
    var ugnify = require('gulp-uglify');

    gulp.task('script', function() {
        gulp.src('js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));
    })
    ```
    - 
* 
## 使用 gulp 压缩 JS