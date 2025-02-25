//bookingRoutes.js
const express = require('express');
const router = express.Router();
const { deleteBooking, changeConsultant, saveBooking } = require('../controllers/bookingController');


// Ensure all controllers are defined and imported correctly
//router.post('/create', createBooking);
//router.post('/update', updateBooking);
router.delete('/delete/:bookingID', deleteBooking);
router.post('/changeConsultant', changeConsultant);
//router.get('/available-time-slots/:week/:day/:roomID', getAvailableTimeSlots);
router.post('/save', saveBooking);
//router.get('/rooms', getAllRooms);



module.exports = router;

