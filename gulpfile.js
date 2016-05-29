const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const runElectron = require("gulp-run-electron");
const jasmine = require('gulp-jasmine');
const reporters = require('jasmine-reporters');
const reactify = require('reactify');
const package = require('./package.json');
const source = require('vinyl-source-stream');
const webpack = require('webpack-stream');

livereload = require('gulp-livereload');


gulp.task('quality', function () {
    return gulp.src(package.paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
})
    .task('specs', function () {
        gulp.src('spec/**/*.spec.js').pipe(jasmine());
    })
    .task('tdd', ['test'], function () {
        gulp.watch('./app/*.js', ['test']);
    }).task('run', function () {
        return gulp.src(".").pipe(runElectron(["--debug"]));
    })
    .task('watch', function () {
        gulp.watch("app/**/*", ['js', runElectron.rerun]);
    })
    .task('js', function () {
        return gulp.src(package.paths.app)
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(gulp.dest(package.dest.dist));
    });


gulp.task('default', ['quality', 'js', 'specs', 'watch', 'run']);
