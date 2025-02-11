<<<<<<< Updated upstream
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
=======
/* const express = require('express');
const router = express.Router();
const { getAdminProfile } = require('../controllers/userController');

router.get('/profile', getAdminProfile);  // Make sure authentication middleware is applied if needed

module.exports = router;*/

>>>>>>> Stashed changes
const jwt = require('jsonwebtoken');
const User = require('../models/User');

<<<<<<< Updated upstream
const protect = async (req, res, next) => {
  let token;
=======
/* const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
>>>>>>> Stashed changes

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
}; */
exports.authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }
          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
};
<<<<<<< Updated upstream

module.exports = { protect };
=======
module.exports = {
  authenticateJWT
};
>>>>>>> Stashed changes
