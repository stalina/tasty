var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var runElectron = require("gulp-run-electron");
livereload = require('gulp-livereload'),

gulp.task('quality', function() {
    return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('run', function() {
  return gulp.src(".").pipe(runElectron(["--debug"]));
});

gulp.task('watch', function () {
    gulp.watch("app/*",  [runElectron.rerun]);
});

gulp.task('default', ['quality','watch','run']);
