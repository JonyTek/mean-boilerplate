var gulp = require('gulp');
var Server = require('karma').Server;

function run(done) {
    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: false
    }, done).start();
}

gulp.task('run:unit', function (done) {
    run(done);
});

module.exports = {
    runUnit: run
}

