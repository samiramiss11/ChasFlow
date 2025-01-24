const Room = require('../models/Room.model.js');

exports.findAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving rooms"
    });
  }
};

// i will add other CRUD operations similarly