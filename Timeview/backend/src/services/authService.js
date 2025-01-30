const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/dbConfig');
const User = require('../models/user.model');


const generateToken = user => {
  return jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

const authenticateLogin = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    throw new Error('Invalid credentials');
  }
  return generateToken(user);
};

module.exports = {
  authenticateLogin,
  generateToken,
};
