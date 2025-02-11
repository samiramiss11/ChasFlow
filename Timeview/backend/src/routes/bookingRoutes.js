const express = require('express');
const router = express.Router();
const { createBooking, deleteBooking, changeConsultant } = require('../controllers/bookingController');

// Ensure all controllers are defined and imported correctly
router.post('/create', createBooking);
//router.post('/update', updateBooking);
router.delete('/delete/:bookingID', deleteBooking);
router.post('/changeConsultant', changeConsultant);

module.exports = router;

