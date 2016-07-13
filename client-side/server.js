'use strict';

const util = require('util');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const emoji = require('node-emoji');

const PORT = process.env.PORT;
const HOSTNAME = 'localhost';

/*
 * Fake DB
 */
function VolatileDB(){
  this.users = [
    { id: 0, name: "Taro", friends: [1, 2] },
    { id: 1, name: "Jiro", friends: [0] },
    { id: 2, name: "Saburo", friends: [0, 3] },
    { id: 3, name: "Hanako", friends: [2, 4] },
    { id: 4, name: "Noriko", friends: [3] },
    { id: 5, name: "Michiko", friends: [] }
  ]

  this.list = function(){
    return this.users;
  }

  this.find = function(id){
    return this.users.find(user => user.id == id);
  }


  this.add = function(user){
    user.friends = [];
    this.users.push(user);
  }
}
const db = new VolatileDB();


/*
 * Server Config
 */
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

const PUBLIC_DIR = path.join(__dirname, 'public');
app.use(express.static(PUBLIC_DIR));


/*
 * JSON API's
 */

//const resJson = require('./server/response.json');
app.get('/api/users', (req, res) => {
  delayResponse(req, () => {
    res.json(db.list());
  })
});

app.get('/api/users/:id', (req, res) => {
  delayResponse(req, () => {
    const found = db.find(req.params.id);
    if (found) {
      res.json(found);
    } else {
      res.status(404).end();
    }
  })
});

app.post('/api/users', (req, res) => {
  delayResponse(req, () => {
    const name = req.body.name;
    if(name){
      const id = db.list().length;
      db.add({id: id, name: name})
      res.json({id: id});
    } else {
      res.status(400).end();
    }
  }); 
});

app.get('/api/echo/:msg', (req, res) => {
  delayResponse(req, () => {
    const msg = req.params.msg;
    res.json({ msg: msg });
  })
});

app.post('/api/echo', (req, res) => {
  delayResponse(req, () => {
    const msg = req.body.msg;
    res.json({ msg: msg });
  })
});

/*
 * Start Server
 */
const server = require('http').createServer(app);
server.listen(PORT, HOSTNAME, () => {
  console.info(`Server is listening at http://${HOSTNAME}:${PORT}. Have fun! ${emoji.get('thumbsup')}`);
});


/*
 * Delay function
 */
function delayResponse(req, callback) {
  const delay = parseInt(req.query.delay);
  const delayMilliSec = delay ? delay : 0;
  setTimeout(callback, delayMilliSec);
}
