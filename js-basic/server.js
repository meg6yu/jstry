'use strict';

const util = require('util');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const emoji = require('node-emoji');

const PORT = process.env.PORT;
const HOSTNAME = 'localhost';

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));

const resJson = require('./server/response.json');
app.get('/api/users', (req, res) => {
  res.json(resJson["users"]);
});

const server = require('http').createServer(app);
server.listen(PORT, HOSTNAME, () => {
  console.info(`Server is listening at http://${HOSTNAME}:${PORT}. Have fun! ${emoji.get('thumbsup')}`);
});
