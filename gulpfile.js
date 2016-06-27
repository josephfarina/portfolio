var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var del = require('del');
var tslint = require("gulp-tslint");
 
// TYPESCRIPT  =========================================================
gulp.task("tslint", () =>
    gulp.src("./app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report("prose", {
          summarizeFailureOutput: true
        }))
);

// BUILD ===============================================================
gulp.task('clean:build', ['clean:build/public', 'copy:html', 'sass:app', 'sass:main']);

gulp.task('clean:build/public', function () {
  return del([
    'build',
    'public'
  ]);
});

gulp.task('copy:html', function () {
    return gulp
    .src('./app/**/*.html')
    .pipe(gulp.dest('build'));
});

// SASS ================================================================
gulp.task('sass', ['sass:app', 'sass:main', 'sass:lint']);

gulp.task('sass:app', function() {
    return gulp
    .src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build'));
});

gulp.task('sass:main', function() {
    return gulp
    .src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));
});
 
gulp.task('sass:lint', function () {
  return gulp.src(['./app/**/*.scss', './scss/**/*.scss'])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// BUILD ===============================================

gulp.task('watch', function() {
    gulp.watch('./app/**/*.html', ['copy:html']);
    gulp.watch(['./app/**/*.scss', './scss/**/*.scss'], ['sass']);
    gulp.watch('./app/**/*.ts', ['tslint']);
})

gulp.task('default', ['clean:build', 'watch']);
