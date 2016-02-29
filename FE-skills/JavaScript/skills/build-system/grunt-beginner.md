Grunt-beginner 前端自动化工具
=====
from:http://www.imooc.com/learn/30

* 主流的方式
    - Yeoman
    - bower
    - Grunt/Gulp
    - CodeKit(MAC OS)
    - Fis
    - Spirit
* Yeoman
    - The web's scaffolding tool for modern webapps.(现代 Web App 的脚手架工具)
    - Yeoman 自动将最佳实践和工具整合进来，大大加速和方便了后续的开发
    - npm install -g yo
* Bower
    - A package manager for the web
    - npm install -g bower
* Grunt
    - Ths JavaScript Task Runner
    - 为什么需要 Build tool？自动化
    - npm install -g grunt-cli
    - grunt-cli 会执行当前目录中 package.json 文件中指定安装的 grunt 的版本来读取当前所在目录下的 Gruntfile 配置文件，按照其中的配置项来对项目进行自动化。为了可以让多个 Grunt 版本并存来支持新老项目
    - ^:是一个比较宽松的对版本的限制，它只限制主版本号(第一位)
        + autoprofixer,concurrent,contrib-clean,contrib-compass,contrib-concat,contrib-connect,contrib-copy,contrib-cssmin,contrib-css,
    - ~:是一个比较严格的对版本的控制，第二位
* npm install -g generator-angular
* 许可证：MIT > BSD > ISC > Apache > GPL
* load-grunt-tasks,time-grunt
* 
