require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const { transporter, mailOptions } = require('./email');

const app = express();
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.post('/validate', (req, res) => {
  const secret = req.body.secret;
  const token = req.body.token;
  axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)
    .then(({ data }) => {
      if(data.success) {
        res.sendStatus(200)
        return;
      }
      res.sendStatus(404);
    })
    .catch((err) => console.log(err))
})

app.post('/email', (req, res) => {
  mailOptions.to = 'dannyhannyford@gmail.com';
  mailOptions.from = 'dannyhannyford@gmail.com';
  mailOptions.replyTo = req.body.email;
  mailOptions.subject = req.body.name;
  mailOptions.text = req.body.message;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(250);
  return;
});

module.exports = app;
