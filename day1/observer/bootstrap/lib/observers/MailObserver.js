/* global require: false, module: false */

var Observer = require('./Observer'),
    // more information about the API at
    // http://www.nodemailer.com/docs/usage-example
    mail = require('nodemailer').mail;

function MailObserver(config) {
  'use strict';
  Observer.apply(this,arguments);
  this.config = config;
}

MailObserver.prototype = Object.create(Observer.prototype);

MailObserver.prototype.update = function (title, data) {
  'use strict';
   console.log("MailObserver");
   console.log(this.config);
   console.log(mail);
   mail({
   	from: this.config.from,
   	to: this.config.to,
   	subject: title,
   	text: data
   });
  // Implement the method
};

module.exports = MailObserver;

