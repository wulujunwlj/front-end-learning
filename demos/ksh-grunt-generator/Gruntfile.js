
// wrapper 函数
module.exports = function (grunt) {
	'use strict';

	// 配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
		    options: {
		        // stripBanners: true,
		        banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd")%> */\n'
		    },
		    build: {
		        src: 'dist/*.js',
		        dest: 'build/<%= pkg.file %>.min.js'
		    }
		}, 

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: 'src/*.js',
				dest: 'dist/all.js'
			}
		}, 

		jshint: {
		    build: ['Gruntfile.js', 'src/*.js'],
		    options: {
		        jshintrc: '.jshintrc'
		    }
		}
	});

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// 注册任务
	// grunt.registerTask('default', 'This is the default task...', function() {
	// 	grunt.log.writeln('Default task is running...');

	// 	grunt.log.writeln(Array.prototype.slice(arguments).join(','));
	// });

	grunt.registerTask('default', ['uglify']);

<<<<<<< HEAD
	grunt.registerTask('ugli', ['uglify']);
=======
	grunt.registerTask('compress', ['uglify']);
	grunt.registerTask('concat:js', ['concat']);

	grunt.registerTask('js:all', ['concat', 'uglify']);
>>>>>>> 14d87c44fef445d4667b8f3eb294766173077dc6
};