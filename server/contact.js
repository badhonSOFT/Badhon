const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configure nodemailer with Gmail SMTP
require('dotenv').config();

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Email to admin
    const adminMailOptions = {
      from: 'badhonroy172@gmail.com',
      to: 'badhonroy172@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}`
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: 'badhonroy172@gmail.com',
      to: email,
      subject: 'Thank you for contacting Badhon Kumar Roy',
      text: `Dear ${name},

Thank you for reaching out! I have received your message and will get back to you within 24 hours.

Your message details:
Subject: ${subject}
Message: ${message}

Best regards,
Badhon Kumar Roy
Software Engineer
Email: badhonroy172@gmail.com
Phone: 01783147171
WhatsApp: https://wa.me/8801783147171`
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    res.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});