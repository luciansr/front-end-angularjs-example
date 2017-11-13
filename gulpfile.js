var gulp = require("gulp");
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var webServer = null;

gulp.task('run-server', function () {
  return gulp.src('src/**/*.*', { read: false })
    .pipe(shell([
      'http-server ./src -p 8092'
    ]));
});

gulp.task('open-browser', shell.task([
  'yarn open'
]));

gulp.task("compile-ts", shell.task([
  'tsc'
]));

gulp.task("webpack", shell.task([
  'yarn webpack'
]));

gulp.task('watch', function () {
  gulp.watch(['src/**/*.ts'], function () {
    runSequence('compile-ts', 'webpack');
  });
});

gulp.task('default', shell.task([
  'gulp compile-ts',
  'gulp webpack',
  'gulp open-browser',
  'gulp watch | gulp run-server'
]));