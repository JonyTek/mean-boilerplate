var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('run:unit', function (done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: false
    }, done).start();
});