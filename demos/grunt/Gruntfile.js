
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

// concat starts
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
				dest: 'dest/libs.js'
			}
		},
		uglify: {
			build: {
				src: 'dest/libs.js',
				dest: 'dest/libs.min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat', 'uglify']);
}
// concat ends