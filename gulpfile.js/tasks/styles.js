'use strict';

const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const config       = require('../config');
const errorHandler = require('../utilities/errorHandler');
const sassLint     = require('gulp-sass-lint');
const gulp         = require('gulp');
const join         = require('path').join;
const minifyCss    = require('gulp-minify-css');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const util         = require('gulp-util');

module.exports = function() {

    return gulp.src(join(config.styles.src, '/**/*.scss'))
        .pipe(sassLint())
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError())
        .pipe(config.production ? util.noop() : sourcemaps.init())
            .pipe(sass(config.sass))
                .on('error', errorHandler)
            .pipe(autoprefixer(config.autoprefixer))
                .on('error', errorHandler)
        .pipe(config.production ? util.noop() : sourcemaps.write())
        .pipe(config.production ? minifyCss() : util.noop())
        .pipe(gulp.dest(join(config.styles.dist)))
        .pipe(config.production ? util.noop() : browserSync.reload({ stream: true }));

};
