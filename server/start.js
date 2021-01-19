require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const { transporter, mailOptions } = require('./email');
const { captchaBackKey } = require('../config.js');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

const validate = async (token) => {
  const secret = captchaBackKey;
  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)
    .then(({data}) => {
      console.log(data, 'recaptcha node data');
    })
    .catch((err) => {
      console.log(err);
    })
  
  return false;
}

app.post('/email', (req, res) => {
  mailOptions.to = 'dannyhannyford@gmail.com';
  mailOptions.from = 'dannyhannyford@gmail.com';
  mailOptions.replyTo = req.body.email;
  mailOptions.subject = req.body.name;
  mailOptions.text = req.body.message;
  const secret = req.body.recaptchaValue;
  console.log('mail options', mailOptions)
  
  let meme = validate(secret);
  // console.log('validate result', meme);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(250);
});

module.exports = app;
