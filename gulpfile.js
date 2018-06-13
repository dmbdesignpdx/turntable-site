"use strict"

const gulp = require("gulp"),
babel = require("gulp-babel"),
uglify = require("gulp-uglify"),
concat = require("gulp-concat"),
shell = require("gulp-shell"),
plumber = require("gulp-plumber"),
browserSync = require("browser-sync").create(),

project = {
	src: ["./src/*.js"],
	merge: "main.min.js",
	dest: "./dist/"
},

serve = shell.task("jekyll serve")

function scripts() {
	return gulp.src(project.src)
	.pipe(plumber())
	.pipe(concat(project.merge))
	.pipe(babel({presets: ["env"]}))
	.pipe(uglify({compress: {properties: false}, output:{comments: "/^!/"}}))
	.pipe(gulp.dest(project.dest))
}

function watch(done) { 
	gulp.watch(project.src, scripts)
	done()
}

function sync(done) {
	browserSync.init({
		server: "./_site/",
		port: 5000,
		open: false,
		ghostMode: false
	})
	browserSync.watch(["./_site/*"]).on("change", browserSync.reload)
	done()
}

exports.scripts = scripts
exports.default = gulp.series(scripts, watch, sync, serve)
