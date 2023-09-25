const nodemailer = require("nodemailer");
require("dotenv").config();

const emails = ["smokemax2002@gmail.com", "garushanmugam@gmail.com"];

let mailSender = nodemailer.createTransport({
  host: process.env.host,
  port: process.env.port,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
  tls: { rejectUnauthorized: false },
});

let details = {
  from: "teddygks@gmail.com",
  to: emails,
  subject: "Hey Minion!",
  attachments: [
    {
      filename: "minion.jpg",
      path: "minion.jpg",
      cid: "image",
    },
  ],
  html: `<h4>Thanks for reading this email.</h4>
        <p><img src = 'cid:image'></img></p> `,
};

mailSender.sendMail(details, (error) => {
  if (error) {
    console.log("Error sending mail");
  } else {
    console.log("Email sent successfully");
  }
});
