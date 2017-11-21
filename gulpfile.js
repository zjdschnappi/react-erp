/* eslint-disable no-console  */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// var pump = require('pump');

var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss')
var exec = require('child_process').exec;

var base64 = require('gulp-base64');
var sassUnicode = require('gulp-sass-unicode');

var less = require('gulp-less');
// var babel = require('gulp-babel');
// const rename = require('gulp-rename');
// const cssnano = require('gulp-cssnano');
// const concat = require('gulp-concat');

gulp.task('polyfill', function() {
  return gulp.src([
	'src/libs/es6-promise.js',
	'src/libs/object-assign-polyfill.js',
	'src/libs/includes-polyfill.js',
	])
    .pipe(concat('polyfill.js'))
	.pipe(uglify({
		mangle: {
			reserved: ['require', 'exports', 'module']
		},
		'output':{
			ascii_only:true
		}
	}).on('error',function(err){
		console.log(err);
	}))
    .pipe(gulp.dest('js/libs'));
});


var watchPath = [
	'css/**/*.scss',
];

gulp.task('sass',function(){
	return gulp.src(watchPath)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});
gulp.task('build',function(){
	var processors = [
		autoprefixer({browsers: ['iOS >= 7', 'Android >= 4.1']}),
	];
	return gulp.src(watchPath)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sassUnicode())
		.pipe(postcss(processors))
		// .pipe(cssnano({zindex:false}))
		.pipe(base64({
			baseDir: './',
			// exclude: ['room-icons.png','grab-icon.png'],
			extensions: ['svg', 'png'],
			maxImageSize: 8*1024, // bytes
			debug: true
		}))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
	exec('gulp sass', function(err) {
		if (err) throw err;
	});
  gulp.watch(watchPath, ['sass']);
});
var watchPath1 = [
	'css/**/*.less',
];
gulp.task('less',function(){
	return gulp.src(watchPath1)
		.pipe(less({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});
// gulp.task('build',function(){
// 	var processors = [
// 		autoprefixer({browsers: ['iOS >= 7', 'Android >= 4.1']}),
// 	];
// 	return gulp.src(watchPath)
// 		.pipe(less({outputStyle: 'compressed'}).on('error', less.logError))
// 		.pipe(sassUnicode())
// 		.pipe(postcss(processors))
// 		// .pipe(cssnano({zindex:false}))
// 		.pipe(base64({
// 			baseDir: './',
// 			// exclude: ['room-icons.png','grab-icon.png'],
// 			extensions: ['svg', 'png'],
// 			maxImageSize: 8*1024, // bytes
// 			debug: true
// 		}))
// 		.pipe(gulp.dest('./assets/css'));
// });

gulp.task('less:watch', function () {
	exec('gulp less', function(err) {
		if (err) throw err;
	});
  gulp.watch(watchPath1, ['less']);
});
gulp.task('default', ['build']);
