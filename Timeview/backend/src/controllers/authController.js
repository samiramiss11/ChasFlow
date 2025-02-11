<<<<<<< Updated upstream
// backend/src/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const sendEmail = require('../utils/emailUtility');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send({ message: "User not found" });

    const isMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!isMatch) return res.status(401).send({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.send({ auth: true, token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.status(404).send({ message: "Email does not exist in our records." });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  const link = `http://localhost:3000/reset-password?token=${token}&email=${email}`;
  
  await sendEmail(email, "Password Reset", `Please use the following link to reset your password: ${link}`);

  res.send({ message: "Reset password link has been sent to your email." });
};

exports.resetPassword = async (req, res) => {
  const { token, email, newPassword } = req.body;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { id: decoded.id, email } });
    
    if (!user) {
      return res.status(404).send({ message: "Invalid token or email" });
    }

    user.passwordHash = bcrypt.hashSync(newPassword, 8);
    await user.save();

    res.send({ message: "Password has been successfully reset." });
  } catch (error) {
    res.status(500).send({ message: "Could not reset password." });
  }
};
=======
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
>>>>>>> Stashed changes
