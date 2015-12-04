var gulp        = require('gulp'),
    selenium    = require('selenium-standalone'),
    shell       = require('gulp-shell');

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
    return gulp.src('wdio-csos.js', {read: false})
        .pipe(shell(['wdio wdio-csos.js']))
        .on("error", function(result) {
        selenium.child.kill();
        throw new Error("There are failed tests!");
    });
});

gulp.task('test', ['integration'], function () {
    selenium.child.kill();
});