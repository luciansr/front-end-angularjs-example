var gulp = require("gulp");
var shell = require('gulp-shell');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');
var webServer = null;

gulp.task('run-server', function () {
  webServer = gulp.src('.')
    .pipe(webserver({
      liveReload: true,
      directoryListing: false,
      open: true,
      fallback: 'src/index.html'
    }));
});

gulp.task('end-server', function () {
  webServer.emit('kill');
});


gulp.task("compile-ts", function () {
  return gulp.src('src/**/*.ts', { read: false })
    .pipe(shell([
      'tsc'
    ]))

});

gulp.task('default', function () {
  runSequence('run-server');
  gulp.watch(['src/**/*'], function () {
    runSequence('end-server', 'compile-ts', 'run-server');
  });
});