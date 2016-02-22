
// wrapper 函数
module.exports = function(grunt) {
	// 项目配置
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'buid/<%= pkg.name %>.min.js'
			}
		}
	});

	// 加载插件
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 注册任务列表
	grunt.registerTask('default', ['uglify']);
};