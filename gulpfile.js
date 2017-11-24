const gulp = require("gulp");
const rigger = require("gulp-rigger");
const rename = require("gulp-rename");
const babili = require("gulp-babili");
gulp.task("copy", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "theorem"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("test", () => {
    gulp
        .src("src/*.js")
        .pipe(rigger())
        .pipe(rename({
            basename: "theorem"
        }))
        .pipe(gulp.dest("__test__"));
});
gulp.task("default", ["copy", "test"])
