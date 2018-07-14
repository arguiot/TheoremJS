const gulp = require("gulp")
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const babili = require("gulp-babili");
const rigger = require("gulp-rigger");
const injectVersion = require("gulp-inject-version")
gulp.task("modern", () => {
	gulp.src("src/base.js")
		.pipe(rigger())
		.pipe(injectVersion())
		.pipe(rename({
			basename: "theorem"
		}))
		.pipe(gulp.dest("dist"));
});
gulp.task("minify", () => {
	gulp.src("src/base.js")
		.pipe(rigger())
		.pipe(injectVersion())
		.pipe(babili({
			mangle: {
				keepClassName: true
			}
		}))
		.pipe(rename({
			basename: "theorem",
			suffix: ".min"
		}))
		.pipe(gulp.dest("dist"));
})
gulp.task("tests", () => {
	gulp.src("src/base.js")
		.pipe(rigger())
		.pipe(injectVersion())
		.pipe(rename({
			basename: "theorem"
		}))
		.pipe(gulp.dest("__test__"));
});
gulp.task("default", ["modern", "minify", "tests"]);
