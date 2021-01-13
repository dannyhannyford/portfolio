const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const { transporter, mailOptions } = require('./email');

const app = express();
app.use(bodyParser.json());
app.use(express.static(PUBLIC_DIR));

app.post('/email', (req, res) => {
  mailOptions.from = req.body.email;
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
});

module.exports = app;
