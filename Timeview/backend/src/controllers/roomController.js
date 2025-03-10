//roomController.js
const { Room, TimeSlot, Booking } = require('../models');
const getISOWeekDate = require('../utils/weekUtils');

// This function fetches rooms with available time slots for a given day of the week.
// Controller for fetching rooms based on day
exports.getRoomsForDay = async (req, res) => {
  const { week, day } = req.params;
 
    const date = getISOWeekDate(new Date().getFullYear(), parseInt(week), day);
    try {
      const rooms = await Room.findAll({ // Modify according to your DB structure
        attributes: ['roomID', 'roomName'], // 'courseCode' field to the response
        });
        console.log('Consultants fetched:', rooms);
       
      res.json(rooms);
    } catch (error) {
      console.error('Error fetching rooms for day:', error);
      res.status(500).send('Failed to fetch rooms');
    }
  };
// Controller for fetching available time slots for a room
exports.getAvailableTimeSlots = async (req, res) => {
  const { week, day } = req.params;
  const year = new Date().getFullYear();
  const date = getISOWeekDate(year, parseInt(week), day);
  try {

    // Add logic to filter time slots based on bookings
    const timeSlots = await TimeSlot.findAll({
      where: { roomID: 1 },
      include: [{
        model: Booking,
        as: 'bookings', 
        where: {
          date: date
        },
        required: false,
      }]
    });

    const availableTimeSlots = timeSlots.filter(slot => 
      !slot.bookings || slot.bookings.length === 0  // Check if no bookings exist
    );
    
   // console.log("Available Time Slots:", availableTimeSlots); // Debug to see filtered slots
    
    res.json(availableTimeSlots);
  }
  catch (error) {
    console.error('Failed to fetch available time slots:', error);
    res.status(500).send('Error fetching available time slots');
  }
};
/*exports.getAvailableTimeSlots = async (req, res) => {
  const { week, day, roomID } = req.params;
  const date = getISOWeekDate(new Date().getFullYear(), parseInt(week), day);
  try {
    const timeSlots = await TimeSlot.findAll({
      include: [{
        model: Booking,
        attributes: ['bookingID'],
        required: false,
        where: {
          date,
          roomID
        }
      }],
      where: {
        roomID
      }
    });
    res.json({ availableTimeSlots: timeSlots });
  } catch (error) {
    console.error('Failed to fetch available time slots:', error);
    res.status(500).send('Error fetching available time slots');
  }
};
*/

///////////////////////////////////////////77
/*const { Room, TimeSlot, Booking } = require('../models');
const getISOWeekDate = require('../utils/weekUtils');
exports.getRoomsForDay = async (req, res) => {
  const { week, day } = req.params;
  try {
    // Assuming you have a function to convert week and day to a date
    const date = getISOWeekDate(new Date().getFullYear(), parseInt(week), day);
    const rooms = await Room.findAll({
      // Include logic to find available rooms based on the date
    });
    res.json({ rooms });
  } catch (error) {
    console.error('Error fetching rooms for day:', error);
    res.status(500).send('Failed to fetch rooms');
  }
};
exports.getAvailableTimeSlots = async (req, res) => {
  const { week, day } = req.query; // Assume roomID comes from req.query or req.params if specific room needed
  const year = new Date().getFullYear(); // or take it as a parameter
  const date = getISOWeekDate(year, parseInt(week), day);

  try {
    const rooms = await Room.findAll({
      include: [{
        model: TimeSlot,
        as: 'TimeSlots',
        attributes: ['timeSlotID', 'startTime', 'endTime'],
        include: [{
          model: Booking,
          required: false,
          attributes: ['bookingID']
        }]
      }]
    });

    // Filter out booked time slots and only send available ones
    const availableTimeSlots = rooms.map(room => ({
      roomID: room.roomID,
      roomName: room.roomName,
      timeSlots: room.timeSlots.filter(ts => 
        !ts.Bookings.length // Assuming Booking is associated within TimeSlot and checks if there are no bookings
      ).map(ts => ({
        timeSlotID: ts.timeSlotID,
        startTime: ts.startTime,
        endTime: ts.endTime
      }))
    }));

    res.json(availableTimeSlots);
  } catch (error) {
    console.error('Failed to fetch available time slots:', error);
    res.status(500).send('Error fetching available time slots');
  }
};


// Controller function to get available time slots for a room, day, and week
exports.getAvailableTimeSlots = async (req, res) => {
  const { week, day, roomID } = req.params; // Get week, day, room from params
  const year = new Date().getFullYear(); // Get the current year

  try {
    // Calculate the Monday of the selected week
    const date = getISOWeekDate(year, parseInt(week), day);
    const bookings = await Booking.findAll({
      where: { roomID, date },
      include: [{
        model: TimeSlot,
        as: 'timeSlots',  // Ensure this matches the alias defined in the model association
        attributes: ['timeSlotID', 'startTime', 'endTime']
    }]
    });
         // Assuming `timeSlots` is correctly populated within each booking:
        let availableTimeSlots = [];
        bookings.forEach(booking => {
            booking.timeSlots.forEach(slot => {
                availableTimeSlots.push({
                    timeSlotID: slot.timeSlotID,
                    startTime: slot.startTime,
                    endTime: slot.endTime
                });
            });
        });

        res.json({ availableTimeSlots });
    } catch (error) {
        console.error('Error fetching time slots:', error);
        res.status(500).send('Failed to fetch time slots');
    }
};
*/


  /*  const timeSlots = await TimeSlot.findAll({
      where: { roomID }
    });

    const availableTimeSlots = timeSlots.filter(slot => 
      !bookings.find(booking => booking.timeSlotID === slot.id)
    );

    res.json({ availableTimeSlots });
  } catch (error) {
    console.error('Error fetching time slots:', error);
    res.status(500).send('Failed to fetch time slots');
  }
}; */
