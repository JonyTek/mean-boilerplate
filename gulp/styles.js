'use strict';

var del = require('del');
var gulp = require('gulp');
var sass = require('gulp-sass');

function copy() {
    return gulp.src('src/app/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/assets/css'));
}

//Compile scss to css, delete and move to build
gulp.task('del-copy:sass', ['delete:css'], function () {
    return copy();
});

//Compile scss to css and move to build
gulp.task('copy:sass', function () {
    return copy();
});

//Compile and minify css then move to build
gulp.task('compile:sass', ['delete:css'], function () {
    console.log('CSS');
    return gulp.src('src/app/styles/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('build/assets/css'));
});

//Delete css from build
gulp.task('delete:css', function () {
    return del([
        'build/assets/css/**/*'
    ]);
});

//Watch scss files and build on change
gulp.task('watch:sass', ['del-copy:sass'], function () {
    return gulp.watch('src/app/**/*.scss', ['copy:sass']);
});