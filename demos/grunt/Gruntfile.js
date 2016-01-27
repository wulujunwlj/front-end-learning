
// uglify starts
// module.exports = function(grunt) {
// 	// 项目配置
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 		uglify: {
// 			options: {
// 				banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
// 			},
// 			build: {
// 				src: 'src/<%= pkg.file %>.js',
// 				dest: 'dest/<%= pkg.file %>.min.js'
// 			}
// 		}
// 	});

// 	// 加载提供 'uglify' 任务插件:压缩
// 	grunt.loadNpmTasks('grunt-contrib-uglify');

// 	// 默认任务
// 	grunt.registerTask('default', ['uglify']);
// }
// uglify ends

// concat & uglify starts
// module.exports = function(grunt) {
// 	grunt.initConfig({
// 		pkg: grunt.file.readJSON('package.json'),
// 		concat: {
// 			options: {
// 				separator: ';'
// 			},
// 			dist: {
// 				src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
// 				dest: 'dest/libs.js'
// 			}
// 		},
// 		uglify: {
// 			build: {
// 				src: 'dest/libs.js',
// 				dest: 'dest/libs.min.js'
// 			}
// 		}
// 	});

// 	grunt.loadNpmTasks('grunt-contrib-uglify');
// 	grunt.loadNpmTasks('grunt-contrib-concat');
// 	grunt.registerTask('default', ['concat', 'uglify']);
// }
// concat & uglify ends

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			'my_target': {
				'files': {
					'dest/libs.min2.js': ['src/zepto.js', 'src/backbone.js', 'src/underscore.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
}

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  //为了介绍自定义任务搞了一个这个
  grunt.registerTask('build', 'require demo', function () {
    //任务列表
    var tasks = ['requirejs'];
    //源码文件
    var srcDir = 'src';
    //目标文件
    var destDir = 'dest';
    //设置参数
    grunt.config.set('config', {
      srcDir: srcDir,
      destDir: destDir
    });
    //设置requireJs的信息
    var taskCfg = grunt.file.readJSON('gruntCfg.json');
    var options = taskCfg.requirejs.main.options,
        platformCfg = options.web,
        includes = platformCfg.include,
        paths = options.paths;
    var pos = -1;
    var requireTask = taskCfg.requirejs;
    options.path = paths;
    options.out = platformCfg.out;
    options.include = includes;
    //运行任务
    grunt.task.run(tasks);
    grunt.config.set("requirejs", requireTask);
  });
}

// module.exports = function(grunt) {
// 	grunt.loadNpmTasks('grunt-contrib-requirejs');
// 	grunt.registerTask('build', 'require demo', function() {
// 		var tasks = ['requirejs'];
// 		var srcDir = 'src';
// 		var destDir = 'dest';
// 		grunt.config.set('config', {
// 			srcDir: srcDir,
// 			destDir: destDir
// 		});

// 		var taskCfg = grunt.file.readJSON('gruntCfg.json');
// 		var options = taskCfg.requirejs.main.options,
// 			platformCfg = options.web,
// 			includes = options.include,
// 			paths = options.paths;

// 		var pos = -1;
// 		var requireTask = taskCfg.requirejs;
// 		options.path = paths;
// 		options.out = platformCfg.out;
// 		options.include = includes;

// 		grunt.task.run(tasks);
// 		grunt.config.set('requirejs', requireTask);
// 	})
// }