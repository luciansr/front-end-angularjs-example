var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var typescript = require('gulp-tsc');

gulp.task("default", function () {
    // return tsProject.src()
    //     .pipe(tsProject());
        //.js.pipe(gulp.dest("dist"));

        gulp.src(['src/**/*.ts'])
        .pipe(typescript())
        .pipe(gulp.dest('src/'))
});