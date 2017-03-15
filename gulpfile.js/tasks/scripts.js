'use strict';

var bundler      = require('../utilities/browserify');
var buffer       = require('vinyl-buffer');
var config       = require('../config');
var errorHandler = require('../utilities/errorHandler');
var gulp         = require('gulp');
var source       = require('vinyl-source-stream');
var stripDebug   = require('gulp-strip-debug');
var uglify       = require('gulp-uglify');
var util         = require('gulp-util');
const babel      = require('gulp-babel');


// What Browserify should do when building the bundle
module.exports = function() {
    return bundler.bundle()
        // log errors if they happen
        .on('error', errorHandler)
        .pipe(source(config.browserify.entry))
        .pipe(buffer())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(config.production ? stripDebug() : util.noop())
        .pipe(config.production ? uglify() : util.noop())
        .pipe(gulp.dest(config.scripts.dist));
};
