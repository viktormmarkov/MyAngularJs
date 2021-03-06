/* global require: false, __dirname: false, console: false */

var MailObserver = require('./lib/observers/MailObserver'),
    LogObserver = require('./lib/observers/LogObserver'),
    logConfig = { path: __dirname + '/logs' },
    mailerConfig = { from: 'Foo Bar <foo@bar.baz>', to: 'vikata3@gmail.com' },
    PostsCollection = require('./lib/observables/PostsCollection'),
    posts = new PostsCollection(),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

posts.addObserver(new MailObserver(mailerConfig));
posts.addObserver(new LogObserver);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/post', function (req, res) {
  'use strict';
  posts.addPost(req.body.title, req.body.content);
  res.status(200);
  res.end();
});

app.listen(3000);

console.log('Listening on port 3000...');

