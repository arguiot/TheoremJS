const { src, dest, parallel } = require("gulp")
const rename = require("gulp-concat");
// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");
// const babili = require("gulp-babili");

function modern() {
	return src("dist/rig.js")
		.pipe(rename("theorem.js"))
		.pipe(dest("dist"));
}
// gulp.task("minify", () => {
// 	gulp.src("dist/rig.js")
// 		.pipe(babili({
// 			mangle: {
// 				keepClassName: true
// 			}
// 		}))
// 		.pipe(rename({
// 			basename: "theorem",
// 			suffix: ".min"
// 		}))
// 		.pipe(gulp.dest("dist"));
// })
function tests() {
	return src("dist/rig.js")
		.pipe(rename("theorem.js"))
		.pipe(dest("__test__"));
}

exports.modern = modern
exports.tests = tests
exports.default = parallel(modern, tests);
