karma 进行 JS 单元测试
=====

## 安装 karma: 
npm install -g karma
## 测试 karma: 
karma start
## karma + jasmine 配置：
    1. karma init
    2. npm install --save-dev karma-jasmine
## 自动化单元测试
    1. 创建对应的源文件: src/*.js
    2. 创建对应的测试文件: test/*.test.js
    3. 修改 karma.conf.js 配置文件
    4. 运行命令: karma start
```
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'src/*.js', 
        'test/*.js'
    ],

    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```
## karma 和 istanbule 代码覆盖率测试
    1. npm install -g karma-coverage
    2. 修改 karma.conf.js 配置文件
    3. 在对应的目录找到覆盖率测试文件 coverage/chrome/index.html，并打开
```
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
        'karma-jasmine', 
        'karma-coverage',
        'karma-chrome-launcher',
        'karma-firefox-launcher'
    ],

    // list of files / patterns to load in the browser
    files: [
        'src/*.js', 
        'test/*.js'
    ],

    // list of files to exclude
    exclude: ['karma.conf.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 
        'src/reverse.js': 'coverage'
    },

    // optionally, configure the reporter
    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```
## 关注点：
* 参考：[Karma和Jasmine自动化单元测试](http://blog.fens.me/nodejs-karma-jasmine/)
* 测试率覆盖时出现问题:WARN [preprocess]: Can not load "coverage", it is not registered!。对应的 karma-coverage 采用全局模式安装。参考[Unable to run Coverage with Karma](http://stackoverflow.com/questions/18069865/unable-to-run-coverage-with-karma)
* [karma 项目地址](https://github.com/karma-runner/karma)