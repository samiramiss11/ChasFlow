// authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { sendResetEmail } = require('../utils/emailUtility');

// Handle user Login action 
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || !bcrypt.compareSync(password, user.password) || !user.isAdmin) {
      return res.status(401).send('Invalid credentials');
    }
  
    const token = jwt.sign({ userID: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  };

// Handle forgot password
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).send('User not found');
        }
        const token = jwt.sign({ userID: user.userID }, process.env.JWT_SECRET, { expiresIn: '15m' });
        sendResetEmail(user.email, `Your reset token is: ${token}`);
        res.send('Reset email sent');
    } catch (error) {
        console.error('Error sending reset email:', error);
        res.status(500).send('Error sending reset email');
    }
};

// Handle password reset
exports.resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.userID);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.password = bcrypt.hashSync(newPassword, 8);
        await user.save();
        res.send('Password updated successfully');
    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).send('Error updating password');
    }
};

// Get profile of the authenticated user
exports.getProfile = async (req, res) => {
    const user = await User.findByPk(req.user.userID); // Extract userID from the JWT token
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    const { firstName, lastName, email } = user;
    res.json({ firstName, lastName, email });
  };