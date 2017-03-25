'use strict';

const join = require('path').join;
const util    = require('gulp-util');

module.exports = {
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'Android 4',
      'IE 8',
      'IE 9',
      'iOS >= 6'
    ]
  },
  browserify: {
    entry: 'app.js'
  },
  production: !!util.env.production,
  sass: {
    errLogToConsole: true
  },
  scripts: {
    dist: 'scripts',
    src: join('src', 'scripts')
  },
  vendorScripts: {
    dist: 'scripts/vendor/',
    src: join('src', 'scripts/vendor/*.js')
  },
  styles: {
    dist: '',
    src: join('src', 'scss')
  }
};
