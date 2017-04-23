'use strict';

const config  = require('./config');
const gulp = require('gulp');
const util    = require('gulp-util');
// What mode?
util.log('Running in', (config.production ? util.colors.red.bold('production') : util.colors.green.bold('development')), 'mode');

// Load tasks
var clean       = require('./tasks/clean');
var eslint      = require('./tasks/eslint');
var modernizr   = require('./tasks/modernizr');
var scripts     = require('./tasks/scripts');
var styles      = require('./tasks/styles');
var watch       = require('./tasks/watch');

gulp.task('copy-scripts', function() {
  return gulp.src(config.vendorScripts.src)
    .pipe(gulp.dest(config.vendorScripts.dist)) 
});
// Define tasks and dependencies
gulp.task('clean:scripts', clean.scripts);
gulp.task('clean:styles', clean.styles);
gulp.task('default', (config.production ? ['modernizr', 'scripts', 'styles'] : ['modernizr', 'scripts', 'styles', 'watch']));
//gulp.task('eslint', eslint);
gulp.task('modernizr', ['scripts', 'styles'], modernizr);
gulp.task('scripts', ['clean:scripts', 'copy-scripts'], scripts);
gulp.task('styles', ['clean:styles'], styles);
gulp.task('watch', ['modernizr', 'scripts', 'styles'], watch);