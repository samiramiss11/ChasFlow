//This file sets up the routes for the authentication functionalities for Admin.
const express = require('express');
const router = express.Router();
const { loginUser, forgotPassword, resetPassword, getProfile } = require('../controllers/authController');
const authenticateJWT = require('../middlewares/authMiddleware');


router.post('/login-page', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/profile', authenticateJWT, getProfile); 

module.exports = router;
