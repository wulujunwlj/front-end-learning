
module.exports = function(grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				separator: ';'
				// ,
				// banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: ['src/zepto.js', 'src/underscore.js', 'src/backbone.js'],
				dest: ['dest/libs.js']
			}
			// build: {
			// 	src: 'src/<%= pkg.file %>.js',
			// 	dest: 'dest/<%= pkg.file %>.min.js'
			// }
		}
	});

	// 加载提供 'uglify' 任务插件:压缩
	// grunt.loadNpmTasks('grunt-contrib-uglify');

	// 默认任务
	// grunt.registerTask('default', ['uglify']);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat']);
}