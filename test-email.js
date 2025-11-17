require('dotenv').config();
const nodemailer = require('nodemailer');

async function testEmail() {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

  try {
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

    console.log('Transporter created, verifying connection...');
    
    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully');

    // Test sending email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Mailer App',
      text: 'This is a test email to verify the configuration works.'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
  }
}

testEmail();
