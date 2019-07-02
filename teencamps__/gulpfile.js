'use strict';
var gulp = require('gulp'),
    prefixer = require('gulp-autoprefixer');
    // min = require('gulp-cssmin'),
    // rename = require('gulp-rename');

gulp.task('buildcss', function (){
    return gulp.src('css/*.css')
        .pipe(prefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        // .pipe(min())
        // .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/build'))
});