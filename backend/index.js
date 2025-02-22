// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'dev.abhijitpaul@gmail.com',
    from: 'contact.abhijitpaul@gmail.com',
    subject: 'Mail from Portfolio',
    text: `${name}\n${email}\n${message}`,
    html: `
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Message:</strong> ${message}
    `,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('status: 200_SUCCESS');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
})


app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
})