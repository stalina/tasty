const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const runElectron = require("gulp-run-electron");
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
var Server = require('karma').Server;

livereload = require('gulp-livereload');

gulp.task('quality', function() {
    return gulp.src('./app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('specs', function() {
    gulp.src('spec/**/*.spec.js').pipe(jasmine());
});

gulp.task('tdd', ['test'], function() {
    gulp.watch('./app/*.js', ['test']);
});

gulp.task('run', function() {
  return gulp.src(".").pipe(runElectron(["--debug"]));
});


gulp.task('watch', function () {
    gulp.watch("app/*",  [runElectron.rerun]);
});

gulp.task('default', ['quality','specs','watch','run']);
