//roomRoutes.js
const express = require('express');
const { getRoomsForDay, getAvailableTimeSlots } = require('../controllers/roomController');
const router = express.Router();

//Room availability check route
//router.get('/rooms', getAllRooms);
router.get('/rooms/:week/:day', getRoomsForDay);
router.get('/timeslots/:week/:day/:roomID', getAvailableTimeSlots);

module.exports = router;