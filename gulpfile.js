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

gulp.task('open-browser', shell.task([
  'npm run open'
])
);

gulp.task("compile-ts", shell.task([
  'tsc'
]));

gulp.task('watch', function () {
  gulp.watch(['src/**/*.ts'], function () {
    runSequence('compile-ts');
  });
});

gulp.task('default', shell.task([
  'gulp run-server | gulp watch'
]));