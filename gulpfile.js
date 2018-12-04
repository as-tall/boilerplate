"use strict";

var less = require('gulp-less');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
 
gulp.task('style', function () {
  gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
    .pipe(plumber())
    .pipe(postcss([
    	autoprefixer()
    ]));
});

gulp.task('serve', ['style'], function() {
    browserSync.init({
        server: ".",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch('less/**/*.less', ['style']);
    gulp.watch('*.html').on('change', browserSync.reload)
});