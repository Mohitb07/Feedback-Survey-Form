const sendgrid = require('sendgrid')
const helper = sendgrid.mail;
const key = require('../config/keys').sendGridKey;

class Mailer extends helper.Mail {

}

module.exports = Mailer;