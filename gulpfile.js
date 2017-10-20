var gulp = require("gulp");
var shell = require('gulp-shell');

gulp.task("default", function () {
    return gulp.src('src/**/*.ts', {read: false})
    .pipe(shell([
      'tsc'
    ]))

});