/* global require: false, module: false */

var Observable = require('./Observable');

function PostsCollection() {
  'use strict';
  Observable.apply(this, arguments);
  this.posts = [];
}

PostsCollection.prototype = Object.create(Observable.prototype);

PostsCollection.prototype.addPost = function (title, content) {
  'use strict';
  console.log("lelelee");
  var post = {
  	title: title,
  	content: content,
  }
  this.posts.push(post);
  for (var i = 0; i < this.observers.length; i++) {
  	this.observers[i].update(title, content);
  };
};

module.exports = PostsCollection;

