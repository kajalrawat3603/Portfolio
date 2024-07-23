const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

const corsOptions = {
  origin: [
    'https://kajal-portfolio-h35tk1jt6-kajal-rawats-projects.vercel.app',
    'https://kajal-portfolio-git-main-kajal-rawats-projects.vercel.app',
    'https://portfolio-nxkm.vercel.app',
    'https://kajal-portfolio-rawat.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Log the request body to verify it
  console.log('Received request body:', req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Bad Request: Missing required fields' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `${name} Wants to Connect`,
    text: message,
    replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Failed to send email', error: error.toString() });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send({ success: true, message: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

