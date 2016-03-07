'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			files: 'src/*.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', []);
};