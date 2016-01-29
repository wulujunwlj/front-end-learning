
# GRUNT
[来源](http://www.gruntjs.net/)

## 快速入门
* Grunt 和 Grunt 插件是通过 npm 安装并管理的，npm 是 Node.js 的包管理器
* Grunt 0.4.x 必须配合 Node.js >= 0.8.0 使用。奇数版本号的 Node.js 被认为是不稳定的开发版。
* npm update -g npm 升级 npm
* 安装步骤:
    - 安装 **grunt** 命令到系统路径中：npm install -g grunt-cli
    - 安装 Grunt 和 grunt 插件:npm install <module> --save-dev。安装 <module> 并将其添加到 devDependencies 配置段中，遵循 tilde version range 格式
* grunt-cli 的任务：调用与 Gruntfile 在同一目录中的 Grunt。因此允许在同一个系统上同时安装多个版本的 Grunt
* grunt-cli 工作原理：每次运行 grunt 时，就利用 node 提供的 require 系统查找本地安装的 Grunt
* Grunt 项目的结构：
    - package.json:被 npm 用于存储项目的元数据，以便将此项目发布为 npm 模块。项目依赖的 grunt 和 Grunt 插件放置于 devDependencies 配置段内
    - Gruntfile:命名为 Gruntfile.js 或 Gruntfile.coffee，用来配置或定义任务(task)并加载 Grunt 插件。
* [插件列表](http://www.gruntjs.net/plugins)
* Gruntfile:
    - Gruntfile.js 或 Gruntfile.coffee 文件是有效的 JS 或 CoffeeScript 文件，应当放在项目的根目录中，和 package.json 文件在同一目录，并和项目源码一起加入源码管理器
    - Gruntfile 由以下几部分构成
        + "wrapper" 函数:module.exports = function(grunt) { /* Do grunt-related things in here*/ }
        + 项目与任务配置:grunt.initConfig(),grunt.file.readJSON()
        + 加载 grunt 插件和任务:grunt --help 命令将列出所有可用的任务
        + 自定义任务:default 用于定义执行 grunt 命令时的默认任务。(grunt default/grunt uglify)。可以通过 grunt.loadTasks 方法加载外部 .js 文件中的任务
    ```
    module.exports = function(grunt) {
        // Project configuration
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            uglify: {
                options: {
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/<%= pkg.name %>.js',
                    dest: 'src/<%= pkg.name %>.min.js'
                }
            }
        });

        // 加载包含 "uglify" 任务的插件
        grunt.loadNpmTasks('grunt-contrib-uglify');

        // 默认被执行的任务列表
        <!-- grunt.registerTask('default', ['uglify']); -->

        // 自定义任务
        grunt.registerTask('default', 'Log some stuff', function() {
            grunt.log.write('Logging some staff...').ok();
            })
    }
    ```

## 配置任务
```
grunt.initConfig({
    concat: {
        options: {
            // 任务级的 options，会覆盖默认值
        },
        // multi-task
        foo: {
            options: {
                // 目标级的 options,会覆盖任务级的 options
            }
            //
        },
        bar: {
            // 没有指定 options，将使用 任务级的 options
        }
    },
    uglify: {
        bar: {
            // 
        }
    },
    property1: 'whatever',
    property2: ['foo/*.js', 'bar/*.js']
});
```

### Grunt 配置
* task 配置都是在 Gruntfile 中的 grunt.initConfig 方法中指定。此配置主要是以任务名称命名的属性，也可以包含其他任意数据。一旦这些代表任意数据的属性与任务所需要的属性相冲突，就将被忽略
* 这里可以使用任何有效的 JS，甚至可以以代码的方式生成配置

### 任务配置和目标
* 当运行一个任务时，Grunt 会自动查找配置对象中的同名属性。多任务(multi-task)可以通过任意命名的目标(target)来定义多个配置。如果一个任务使用 grunt.task.renameTask 重命名过，Grunt 将在配置对象中查找以新的任务名命名的属性

### options 属性(可选)
* 用来指定覆盖内置默认的属性值。此外，每一个目标中还可以拥有一个专门针对此目标的 options 属性。目标级的options将会覆盖任务级的 options

### 文件
* 文件：
    - 简洁格式
    - 文件对象格式
    - 文件数组格式
    - 较老的格式
    - 自定义过滤函数
    - 通配符模式
    - 动态构建文件对象
    - 模板

### 模板

### 导入外部数据
* Grunt 有 grunt.file.readJSON() 和 grunt.file.readYAML 两个方法分别用于引入 JSON 和 YAML 数据
