
// wrapper 函数
module.exports = function (grunt) {
	'use strict';

	// 配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
		    options: {
		    	mangle: false, 
		        stripBanners: true,
		        banner: '/*! <%= pkg.name %> - <%= pkg.version %>.js <%= grunt.template.today("yyyy-mm-dd")%> */\n'
		    },
		    build: {
		        src: 'src/*.js',
		        dest: 'build/<%= pkg.name %>-<%= pkg.version %>.min.js'
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

	// 注册任务
	// grunt.registerTask('default', 'This is the default task...', function() {
	// 	grunt.log.writeln('Default task is running...');

	// 	grunt.log.writeln(Array.prototype.slice(arguments).join(','));
	// });

	grunt.registerTask('default', ['uglify']);

	grunt.registerTask('ugli', ['uglify']);
};