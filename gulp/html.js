'use strict';

var del = require('del');
var gulp = require('gulp');
var inject = require('gulp-inject');
var series = require('stream-series');
var templateCache = require('gulp-angular-templatecache');
var livereload = require('gulp-livereload');

var templateConfig = {
    module: 'mean-bp'
}

function copyDependencies() {
    var app = gulp.src('build/assets/js/app.js', {read: false});
    var sources = gulp.src([
        '!build/assets/js/app.js',
        'build/assets/js/**/*.js',
        'build/assets/css/*.css',
        'build/assets/scripts/**/*.js'
    ], {read: false});

    return gulp.src('build/index.html')
        .pipe(inject(series(app, sources), {relative: true}))
        .pipe(gulp.dest('build'));
};

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
    copyDependencies();
});

//Watch index.html then copy to build on change
gulp.task('watch:index', ['del-copy:index'], function () {
    return gulp.watch(['src/app/**/*.html', 'src/app/**/*.tpl.html'], ['inject:index', 'cache:templates']);
});

//Add templates to cache
gulp.task('cache:templates', function () {
    return gulp.src('src/app/**/*.tpl.html')
        .pipe(templateCache(('templates', templateConfig)))
        .pipe(gulp.dest('build/assets/js'))
        .pipe(livereload());
});

module.exports = {
    copyDependencies: copyDependencies
};