'use strict';

const browserify  = require('browserify');
const config      = require('../config');
const join        = require('path').join;
const watchify    = require('watchify');

var bundle = browserify({
    entries: join(config.scripts.src, config.browserify.entry),
    debug: !config.production,
    cache: {},
    packageCache: {},
    fullPaths: true
});

if (!config.production) {
    bundle = watchify(bundle);
}

module.exports = bundle;