//This file sets up the routes for the authentication functionalities for Admin.
const express = require('express');
const { loginUser, forgotPassword, resetPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/login-page', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
