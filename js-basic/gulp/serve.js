/* eslint no-underscore-dangle:0 */
'use strict';

const path = require('path');
const stream = require('stream');
const gutil = require('gulp-util');
const emoji = require('node-emoji');

const SERVER_SCRIPT = path.join(__dirname, '../server.js');


const serve = function() {
  const nodemon = require('gulp-nodemon');
  const readable = new stream.Readable({ objectMode: true });

  readable._read = function() {
    const self = this;

    nodemon({
      script: SERVER_SCRIPT,
      watch: [SERVER_SCRIPT],
      env: { PORT: serve.PORT },
      stdout: false
    }).on('readable', function() {
      this.stdout.on('data', function(buf) {
        gutil.log(String(buf));
        if (!String(buf).match(/SERVER_READY/)) { return; }

        // server is ready.
        self.emit('end');
      });

      this.stderr.on('data', function(buf) {
        const stderr = String(buf);
        const isAddressAlreadyInUse = Boolean(stderr.match(/EADDRINUSE/));
        const msg = `Oops! Couldn't start server! ${emoji.get('cold_sweat')}  ` + (isAddressAlreadyInUse ?
            'Port 8000 is already in use.' : stderr);

        gutil.log(gutil.colors.red(msg));
      });
    });
  };

  return readable;
};


serve.PORT = process.env.PORT || 8000;

module.exports = serve;
