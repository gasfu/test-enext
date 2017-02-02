const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const concatCss = require('gulp-concat-css');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('clean-css', function () {
	
	return gulp.src('dist/css')
	.pipe(clean());

});

gulp.task('clean-js', function () {
	
	return gulp.src('dist/js')
	.pipe(clean());

});

gulp.task('clean-components', function () {
	
	return gulp.src('dist/components')
	.pipe(clean());

});

gulp.task('clean-fonts', function () {
	
	return gulp.src('dist/fonts')
	.pipe(clean());

});

gulp.task('sass', ['clean-css'], function () {

	return gulp.src('assets/scss/main.scss')
	.pipe(sass())
	.pipe(concatCss('all.min.css'))
	.pipe(cssmin())
    .pipe(gulp.dest('assets/dist/css'));

});

gulp.task('js', ['clean-js'], function () {

	return gulp.src('assets/js/*.js')
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('assets/dist/js'));

});

gulp.task('componentsCSS', ['clean-components'], function (){
	return gulp.src([
		'assets/components/bootstrap-grid/dist/bootstrap-grid.min.css',
		'assets/components/font-awesome/css/font-awesome.min.css'
	])
	.pipe(concatCss('components.min.css'))
	.pipe(cssmin())
	.pipe(gulp.dest('assets/dist/components'));
});

gulp.task('fonts', ['clean-fonts'], function (){
	return gulp.src([
		'assets/components/font-awesome/fonts/fontawesome-webfont.eot',
		'assets/components/font-awesome/fonts/fontawesome-webfont.svg',
		'assets/components/font-awesome/fonts/fontawesome-webfont.ttf',
		'assets/components/font-awesome/fonts/fontawesome-webfont.woff',
		'assets/components/font-awesome/fonts/fontawesome-webfont.woff2',
		'assets/components/font-awesome/fonts/FontAwesome.otf'
	])
	.pipe(gulp.dest('assets/dist/fonts'));
});


gulp.task('default', ['fonts'], function () {

	gulp.watch('assets/scss/*.scss', ['sass']);
	gulp.watch('assets/js/*.js', ['js']);

});