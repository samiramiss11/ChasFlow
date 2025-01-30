const authService = require('../services/authService');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await authService.authenticateLogin(email, password);
        console.log('Login Successful:', { email });  // Log successful login attempt
        res.json({ token });
    } catch (error) {
        console.error('Login Error:', error);  // Log errors
        res.status(401).json({ message: error.message });
    }
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        // Logic to handle the creation of the password reset token
        const user = await authService.getUserByEmail(email);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const token = await authService.createPasswordResetToken(user);
        const resetLink = `http://yourdomain.com/reset-password?token=${token}`;

        // Email setup (using nodemailer)
        let transporter = nodemailer.createTransport({
            service: 'gmail', // For example, using Gmail
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: 'your-email@gmail.com',
            to: email,
            subject: 'Password Reset',
            text: `Click here to reset your password: ${resetLink}`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                res.status(500).send('Error sending email');
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: 'Reset link sent to your email.' });
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assuming token includes the user ID
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Assuming you have a function to find user by ID and update their password
        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.passwordHash = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password has been reset successfully.' });
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    login,
    forgotPassword,
    resetPassword
};
