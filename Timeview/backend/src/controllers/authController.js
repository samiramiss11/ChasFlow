// This file will contain the logic for Admin user login, initiating a password reset, and resetting the password.
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { sendResetEmail } = require('../utils/emailUtility');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !bcrypt.compareSync(password, user.password) || !user.isAdmin) {
            return res.status(401).send('Login failed');
        }
        const token = jwt.sign({ userID: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const forgotPassword = async (req, res) => {
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
        res.status(500).send('Error sending reset email');
    }
};

const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.userID);
        user.password = bcrypt.hashSync(newPassword, 8);
        await user.save();
        res.send('Password updated successfully');
    } catch (error) {
        res.status(500).send('Error updating password');
    }
};

module.exports = { loginUser, forgotPassword, resetPassword };
