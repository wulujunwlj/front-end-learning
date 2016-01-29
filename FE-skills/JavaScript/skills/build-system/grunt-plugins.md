GRUNT 常用插件
======

# grunt-contrib-uglify(JS 压缩)
```
uglify: {
    options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - <%= pkg.version %>.js <%= grunt.template.today("yyyy-mm-dd")%> */'
    },
    build: {
        src: 'src/test-uglify.js',
        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
    }
}
```

# grunt-contrib-jshint(检查 JS 语法错误。搜索 jshint 配置；先 jshint 再 uglify)
```
jshint: {
    build: ['Gruntfile.js', 'src/*.js'],
    options: {
        jshintrc: '.jshintrc'
    }
}
```

# grunt-contrib-cssmin(CSS 压缩)

# grunt-contrib-csslint(检查 CSS 语法错误)
```
csslint: {
    build: ['src/css/*.css'],
    options: {
        csslint: '.csslintrc'
    }
}
```

# grunt-contrib-watch(自动化)

