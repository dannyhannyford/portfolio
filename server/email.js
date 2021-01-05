const nodemailer = require('nodemailer');
const nodeAuth = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: nodeAuth.user,
    pass: nodeAuth.pass,
  },
});

const mailOptions = {
  from: 'users email',
  to: nodeAuth.user,
  subject: 'name goes here',
  text: 'Dudes, we really need your money.',
};
module.exports = {
  transporter,
  mailOptions,
};
