var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var includer = require('gulp-htmlincluder');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('missionZero', function(){
	connect.server({
		root: 'build/',
		livereload: true
	});
});



gulp.task('missionOne', function(){
	gulp.src('dev/css/*.css')
	.pipe(sourcemaps.init())
	.pipe(concatCss('style.css'))
	.pipe(autoprefixer({
		browsers: ['> 5%', 'IE 7'],
			cascade: false
	}))
	.pipe(cleanCss({
		compability: 'ie8'
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css/'))
	.pipe(connect.reload());


	
});
gulp.task('missionTwo', function(){
	gulp.src('dev/html/**/*.html').pipe(includer()).pipe(gulp.dest('build/')).pipe(connect.reload());
});
gulp.task('missionThree', function(){
	gulp.src('dev/img/*.*').pipe(gulp.dest('build/img/'));
});

gulp.task('default', function(){
	gulp.start('missionOne', 'missionTwo', 'missionZero', 'missionThree');

	gulp.watch(['dev/css/*.css'], function(){
		gulp.start('missionOne');
	});
	gulp.watch(['dev/html/**/*.html'], function(){
		gulp.start('missionTwo');
	});
	gulp.watch(['dev/img/*.*'], function(){
		gulp.start('missionThree');
	});
});

