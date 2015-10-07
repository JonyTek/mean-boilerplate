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
gulp.task('dev', ['watch:js', 'watch:sass', 'watch:index', 'watch:assets', 'run:unit'], function () {
    nodemon({
        script: 'src/api/server',
        ext: 'js',
        ignore: ['app*', 'gulp*', 'build*']
    });

    html.copyDependencies();
});

//Minify app and resources
gulp.task('compile', ['compile:js', 'compile:sass', 'del-copy:index', 'del-copy:assets'], function () {
    return html.copyDependencies();
});

//Build app injecting individual js files
gulp.task('build', ['del-copy:js', 'del-copy:sass', 'del-copy:index', 'del-copy:assets'], function () {
    return html.copyDependencies();
});
