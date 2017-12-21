/* eslint-disable no-console  */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');

var autoprefixer = require('autoprefixer');

var postcss = require('gulp-postcss')
var exec = require('child_process').exec;

var base64 = require('gulp-base64');

var notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

var less = require('gulp-less');

gulp.task('lib', function() {
  return gulp.src([
	'src/libs/react.min.js',
	'src/libs/react-dom.min.js',
	'src/libs/antd.min.js',
	'src/libs/polyfill.min.js'
	])
    .pipe(concat('lib.js'))
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
    .pipe(gulp.dest('js'));
});
