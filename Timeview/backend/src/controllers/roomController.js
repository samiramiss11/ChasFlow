//check if a specific room is available for a specific time slot on a given day.
const { Event, Op } = require('../models');

exports.checkRoomAvailability = async (req, res) => {
  const { roomId, date, startTime, endTime } = req.body;

  try {
    const bookings = await Event.findAll({
      where: {
        roomId,
        date,
        [Op.or]: [
          { startTime: { [Op.between]: [startTime, endTime] } }, // Check if the startTime overlaps
          { endTime: { [Op.between]: [startTime, endTime] } }
        ]
      }
    });

    if (bookings.length) {
      return res.status(400).json({ message: 'Room not available for the selected time slot' });
    }

    // If no bookings are found, proceed with the next steps (not shown here for brevity)
    res.json({ message: 'Room is available for booking', available: true });
  } catch (error) {
    res.status(500).send('Error checking room availability: ' + error.message);
  }
};

/*const Room = require('../models/Room.model.js');
>>>>>>> Stashed changes

exports.findAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving rooms"
    });
  }
};*/
};*/

// i will add other CRUD operations similarly */