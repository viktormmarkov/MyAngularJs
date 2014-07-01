/* global module: false, require: false */

var Observer = require('./Observer'),
    fs = require('fs');

function LogObserver(config) {
  'use strict';
  Observer.apply(this,arguments);
  this.config = config;
}

LogObserver.prototype = Object.create(Observer.prototype);

LogObserver.prototype.update = function (title, data) {
  'use strict';
  fs.writeFileSync(Date.now() + title + ".txt", data);
  console.log("logObserver");
};

module.exports = LogObserver;

