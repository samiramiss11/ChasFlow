// Handles the sending of emails, particularly for password reset.
const nodemailer = require('nodemailer');

const sendResetEmail = (email, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset',
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Email not sent: ' + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = { sendResetEmail };
