const nodemailer = require('nodemailer');
const node_auth = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: node_auth.user,
    pass: node_auth.pass,
  },
});

const mailOptions = {
  from: 'users email',
  to: node_auth.user,
  subject: 'name goes here',
  text: 'Dudes, we really need your money.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
	console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports = {
  transporter,
  mailOptions,
};
