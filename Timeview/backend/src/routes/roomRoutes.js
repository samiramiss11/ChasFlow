const express = require('express');
<<<<<<< Updated upstream
const { body, validationResult } = require('express-validator');
const router = express.Router();
const roomController = require('../controllers/roomController');

router.get('/', roomController.findAllRooms);
router.post('/create', [
    body('roomName').not().isEmpty().withMessage('Room name is required'),
  ], roomController.createRoom);
  // Define other routes like POST, DELETE, PUT here

module.exports = router;
=======
const { checkRoomAvailability } = require('../controllers/roomController');
const router = express.Router();

// Room availability check route
router.post('/check-availability', checkRoomAvailability);

module.exports = router;
>>>>>>> Stashed changes
