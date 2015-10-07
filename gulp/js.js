'use strict';

var del = require('del');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

//Delete and copy individual js files to build
gulp.task('del-copy:js', ['delete:js'], function () {
    return gulp.src('src/app/**/*.js')
        .pipe(gulp.dest('build/assets/js'));
});

//Copy individual js files to build
gulp.task('copy:js', function () {
    return gulp.src('src/app/**/*.js')
        .pipe(gulp.dest('build/assets/js'));
});

//Build and minify js files to single app.js for release
gulp.task('compile:js', ['delete:js'], function () {
    return gulp.src(['src/app/app.js', 'src/app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('build/assets/js'));
});

//Delete all .js files from build
gulp.task('delete:js', function () {
    return del([
        'build/assets/js/**/*'
    ]);
});

//Watch .js files and rebuild on change
gulp.task('watch:js', ['del-copy:js'], function () {
    return gulp.watch('src/app/**/*.js', ['copy:js']);
});