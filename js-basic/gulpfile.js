'use strict';

const path = require('path');
const gulp = require('gulp-help')(require('gulp'));
const serve = require('./gulp/serve.js');
const eslint = require('gulp-eslint');
const tasks = [
  {
    id: 'lesson1',
    help: '意図したとおりにDOMを取得できているかのテスト'
  }
];

tasks.forEach((task) => {
  const lesson = path.join('public', task.id);
  const js = path.join(lesson, '**/*.js');

  gulp.task('lint-' + task.id, 'ミスの起きやすいコードや可読性の低いコードがないか検査します', () => {
    gulp.src(js)
      .pipe(eslint())
      .pipe(eslint.format())
  });
});

gulp.task('serve', '学習用のサーバーを起動します', () => {
  serve()._read();
});
