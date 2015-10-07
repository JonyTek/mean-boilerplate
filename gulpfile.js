'use strict';

var fs = require('fs');
var gulp = require('gulp');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');

var html = require('./gulp/html')

//Require all gulp files
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
});

//Dev task - watch all resources and run server
gulp.task('dev', ['watch:js', 'watch:sass', 'watch:index'], function () {
    nodemon({
        script: 'src/api/server',
        ext: 'js',
        ignore: ['app*', 'gulp*', 'build*']
    });

    html.copyDependencies();
});

//Minify app and resources
gulp.task('compile', ['compile:js', 'compile:sass', 'copy:index'], function () {
    return html.copyDependencies();
});

//Build app injecting individual js files
gulp.task('build', ['build:js', 'build:sass', 'copy:index'], function () {
    return html.copyDependencies();
});