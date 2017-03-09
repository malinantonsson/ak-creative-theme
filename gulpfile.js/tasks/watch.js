'use strict';

const bundler     = require('../utilities/browserify');
const config      = require('../config');
const gulp        = require('gulp');
const join        = require('path').join;

module.exports = function() {

    // This task should exit if we are in production
    if (config.production) {
        return;
    }

    // Watch .scss files
    gulp.watch(join(config.styles.src, '**', '*.scss'), ['styles']);

    // Watch .js files
    bundler.on('update', function() {
        // Build the bundle
        gulp.start('scripts');
    });

};
