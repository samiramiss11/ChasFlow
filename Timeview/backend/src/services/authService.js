<<<<<<< Updated upstream
=======
// Handles the core logic for authentication, such as password verification and JWT creation.
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const verifyPassword = (inputPassword, userPassword) => bcrypt.compareSync(inputPassword, userPassword);

const createToken = (user) => jwt.sign({ userID: user.userID }, process.env.JWT_SECRET, { expiresIn: '1h' });

module.exports = { verifyPassword, createToken };
>>>>>>> Stashed changes
