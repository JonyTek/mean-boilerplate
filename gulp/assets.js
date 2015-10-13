var del = require('del');
var gulp = require('gulp');
var livereload = require('gulp-livereload');

//Add any additional sub directories here
//e.g. fonts
var assetDirectories = [
    'img',
    'scripts'
];

function copy() {
    assetDirectories.forEach(function (dir) {
        gulp.src('src/app/assets/' + dir + '/**/*')
            .pipe(gulp.dest('build/assets/' + dir));
    });

    return livereload.reload();
}

//Copy assets to build
gulp.task('del-copy:assets', ['delete:assets'], function () {
    copy();
});

//Copy assets to build
gulp.task('copy:assets', function () {
    copy();
});

//Delete assets
gulp.task('delete:assets', function () {
    assetDirectories.forEach(function (dir) {
        del('build/assets/' + dir + '**/*');
    });
});

//Watch index.html then copy to build on change
gulp.task('watch:assets', ['del-copy:assets'], function () {
    return gulp.watch('src/app/assets/**/*.*', ['copy:assets']);
});
