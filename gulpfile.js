var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var purify = require('gulp-purifycss');
var rename = require('gulp-rename');

// SASS ================================================================
gulp.task('copy-snap', function() {
    gulp
        .src(['lib/snap.js'])
        .pipe(gulp.dest('public/javascripts'));    
})

gulp.task('sass', ['sass:main']);

gulp.task('sass:main', function() {
    gulp
        .src(['node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(gulp.dest('public/stylesheets'));
    gulp
        .src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
	    		browsers: ['last 2 versions'],
	    		cascade: false
	    }))
        .pipe(gulp.dest('public/stylesheets/'));
});
 
gulp.task('sass:lint', function () {
  return gulp.src(['./scss/**/*.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.scss', './scss/**/*.scss'], ['sass']);
})

gulp.task('default', ['copy-snap', 'sass', 'watch']);
