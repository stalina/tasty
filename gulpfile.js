const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const runElectron = require("gulp-run-electron");
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const reactify = require('reactify');
const browserify =require('browserify');
const package = require('./package.json');
const source = require('vinyl-source-stream');

    livereload = require('gulp-livereload');


gulp.task('quality', function() {
    return gulp.src(package.paths.js)
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
    gulp.watch("app/**/*",  ['js',runElectron.rerun]);
});

gulp.task('js', function(){
    browserify(package.paths.app)
        .ignore('selenium-webdriver')
        .transform(reactify)
        .bundle()
        .pipe(source(package.dest.app))
        .pipe(gulp.dest(package.dest.dist));
});


gulp.task('default', ['quality','js','specs','watch','run']);
