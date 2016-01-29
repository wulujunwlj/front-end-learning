
module.exports = function(grunt) {
	// 任务配置，所有插件的配置信息
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.file %> - <%= pkg.version %>.js <%= grunt.template.today("yyyy-mm-dd")%> */'
			},
			build: {
				src: 'src/test-uglify.js',
				dest: 'build/<%= pkg.file %>-<%= pkg.version %>.min.js'
			}
		},
		jshint: {
			build: ['Gruntfile.js', 'src/test-uglify.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		cssmin: {
			options: {
				stripBanners: true,
				banner: '/*! app.css */'
			},
			build: {
				src: 'src/css/*.css',
				dest: 'build/css/app.css'
			}
		},
		csslint: {
			build: ['src/css/*.css'],
			options: {
				csslint: '.csslintrc'
			}
		},
		watch: {
			build: {
				files: ['src/*.js', 'src/css/*.css'],
				tasks: ['jshint', 'uglify', 'cssmin'],
				options: { spawn: false }
			}
		}
	});

	// 加载使用的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 告诉 grunt 在终端输入 'grunt' 时需要做什么
	grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'watch']);
};