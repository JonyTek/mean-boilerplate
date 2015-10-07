'use strict';

var del = require('del');
var gulp = require('gulp');
var inject = require('gulp-inject');
var series = require('stream-series');

//Copy index.html to build
gulp.task('del-copy:index', ['delete:index'], function () {
    return gulp.src('src/app/index.html')
        .pipe(gulp.dest('build'));
});

//Delete index.html
gulp.task('delete:index', function () {
    return del([
        'build/index.html'
    ]);
});

//Inject all js & css files into index.html
gulp.task('inject:index', ['del-copy:index'], function () {
    return copyDependencies();
});

//Watch index.html then copy to build on change
gulp.task('watch:index', ['del-copy:index'], function () {
    return gulp.watch('src/app/index.html', ['inject:index']);
});

function copyDependencies() {
    var app = gulp.src('build/assets/js/app.js', {read: false});
    var sources = gulp.src([
        '!build/assets/js/app.js',
        'build/assets/js/**/*.js',
        'build/assets/css/*.css'
    ], {read: false});

    return gulp.src('build/index.html')
        .pipe(inject(series(app, sources), {relative: true}))
        .pipe(gulp.dest('build'));
};

module.exports = {
    copyDependencies: copyDependencies
};