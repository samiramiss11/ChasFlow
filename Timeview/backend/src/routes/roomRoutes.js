const express = require('express');
const { checkRoomAvailability } = require('../controllers/roomController');
const router = express.Router();

// Room availability check route
router.post('/check-availability', checkRoomAvailability);

module.exports = router;
