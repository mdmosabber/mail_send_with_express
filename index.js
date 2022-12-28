const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

app.get('/send-email', (req, res) => {
  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'md.mosabber@gmail.com',
        pass: '********'
    }
  });

  // Define the email options
  let mailOptions = {
    from: '"Your Name" md.mosabber@gmail.com', // sender address
    to: 'md.mosabber@gmail.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello, World!', // plain text body
    html: '<b>Hello, World!</b>' // html body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
