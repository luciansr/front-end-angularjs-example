var gulp = require("gulp");
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var webServer = null;

gulp.task('run-server', function () {
  return gulp.src('src/**/*.*', { read: false })
    .pipe(shell([
      'http-server ./src | npm run open'
    ]));
});

gulp.task('open-browser', function () {
  return gulp.src('src/**/*.*', { read: false })
    .pipe(shell([
      'npm run open'
    ]));
});




gulp.task("compile-ts", function () {
  return gulp.src('src/**/*.ts', { read: false })
    .pipe(shell([
      'tsc'
    ]))

});
gulp.task('watch', function () {
  gulp.watch(['src/**/*.ts'], function () {
    gulp.src('src/**/*.ts', { read: false })
    .pipe(shell([
      'gulp compile-ts'
    ]))
  });
});

gulp.task('default', function () {
  return gulp.src('src/**/*.*', { read: false })
  .pipe(shell([
    'gulp run-server | gulp watch'
  ]));
});