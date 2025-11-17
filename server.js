const nodemailer = require('nodemailer');

// Handle contact form submissions
const handleContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create transporter with proper Gmail configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify connection before sending
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: 'Contact Form Submission from ' + name,
      text: 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ success: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message: ' + error.message });
  }
};

module.exports = {
  handleContact
};
