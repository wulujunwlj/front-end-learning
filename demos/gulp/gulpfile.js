
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

var less = require('gulp-less');
var sass = require('gulp-sass');

gulp.task('minifycss', function() {
	return gulp.src('src/styles/*.css')
		.pipe(gulp.dest('dist/styles'))
		.pipe(minifycss());
});

gulp.task('rename', function() {
	return gulp.src('src/styles/app.css')
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('uglify', function() {
	return gulp.src('src/javascripts/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist/javascripts'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/javascripts'));
});

gulp.task('rev', function() {
	return gulp.src('dist/javascripts/*.js')
		.pipe(revCollector())
		.pipe(gulp.dest('dist/prod/'));
});

gulp.task('less', function() {
	return gulp.src('src/styles/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('sass', function() {
	return gulp.src('src/styles/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('default', ['uglify', 'rev']);