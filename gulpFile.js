var gulp        = require('gulp'),
    selenium    = require('selenium-standalone'),
    mocha     = require('gulp-mocha');

gulp.task('selenium', function (done) {
    selenium.install({
        logger: function (message) { }
    }, function (err) {
        if (err) return done(err);

        selenium.start(function (err, child) {
            if (err) return done(err);
            selenium.child = child;
            done();
        });
    });
});

gulp.task('integration', ['selenium'], function () {
    return gulp.src('csosTest.js', {read: false})
        .pipe(mocha());
});

gulp.task('test', ['integration'], function () {
    selenium.child.kill();
});