require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

const mailOptions = {
  from: 'meme@dream',
  to: 'wow@bow',
  subject: 'name goes here',
  text: 'Dudes, we really need your money.',
};
module.exports = {
  transporter,
  mailOptions,
};
