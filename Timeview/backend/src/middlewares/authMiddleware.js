
/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */

/* const express = require('express');
const router = express.Router();
const { getAdminProfile } = require('../controllers/userController');

router.get('/profile', getAdminProfile);  // Make sure authentication middleware is applied if needed

module.exports = router;*/
/* const express = require('express');
const router = express.Router();
const { getAdminProfile } = require('../controllers/userController');

router.get('/profile', getAdminProfile);  // i will need to Make sure authentication middleware is applied if needed

module.exports = router;*/

const jwt = require('jsonwebtoken');
const User = require('../models/User');

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
module.exports = {
  authenticateJWT
};



