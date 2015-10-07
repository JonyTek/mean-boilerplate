var del = require('del');
var gulp = require('gulp');

//Add any additional sub directories here
//e.g. fonts
var assetDirectories = [
    'img'
];

function copy() {
    assetDirectories.forEach(function (dir) {
        gulp.src('src/app/assets/' + dir + '/**/*')
            .pipe(gulp.dest('build/assets/' + dir));
    });
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
