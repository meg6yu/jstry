'use strict';

const path = require('path');
const gulp = require('gulp');
const serve = require('./gulp/serve.js');

gulp.task('serve', () => {
  serve()._read();
});
