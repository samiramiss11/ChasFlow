//bookingController.js the logic to handle booking creation, deletion, and modification.
//const getISOWeekDate = require('../utils/weekUtils');
const { Booking, TimeSlot, Room, Consultant, Course } = require('../models');



//delete booking
exports.deleteBooking = async (req, res) => {
    const { bookingID } = req.params;
    try {
        const booking = await Booking.findByPk(bookingID);
        if (booking) {
                        // Free the associated time slot
                        const slot = await TimeSlot.findByPk(booking.timeSlotID);
                        slot.isBooked = false;
                        await slot.save();

            await booking.destroy();
            res.send('Booking deleted successfully');
        } else {
            res.status(404).send('Booking not found');
        }
    } catch (error) {
        res.status(500).send('Error deleting booking: ' + error.message);
    }
};
//change consultant
exports.changeConsultant = async (req, res) => {
    const { bookingID, newConsultantID } = req.body;
    try {
        const booking = await Booking.findByPk(bookingID);
        if (booking) {
            booking.consultantID = newConsultantID;
            await booking.save();
            res.send('Consultant changed successfully');
        } else {
            res.status(404).send('Booking not found');
        }
    } catch (error) {
        res.status(500).send('Error changing consultant: ' + error.message);
    }
};

//new idea for bookingform




// Controller function to get available time slots for a room, day, and week
/*
exports.getAvailableTimeSlots = async (req, res) => {
  const { week, day, roomID } = req.params; // Get week, day, room from params
  //const year = new Date().getFullYear(); // Get the current year

  try {
    // Calculate the Monday of the selected week
    const mondayOfWeek = getMondayOfISOWeek(year, parseInt(week));

    // Find existing bookings for the given week, day, and room
    const bookedSlots = await Booking.findAll({
      where: { roomID, week: parseInt(week), day: day },
      include: [TimeSlot],
    });

    // Retrieve all available time slots for that room
    const allTimeSlots = await TimeSlot.findAll({
      where: { roomID },
    });

    // Filter out the booked time slots
    const availableTimeSlots = allTimeSlots.filter(slot => 
      !bookedSlots.some(booking => booking.timeSlotID === slot.id)
    );

    res.status(200).json({ availableTimeSlots, mondayOfWeek: mondayOfWeek.toISOString().split('T')[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching time slots' });
  }
}; */


/*exports.getAllRooms = async (req, res) => {
  try {
    console.log('Fetching rooms...');  // Log to see if the function is called
    const rooms = await Room.findAll();
    res.json(rooms);
  } catch (error) {
    console.error('Error retrieving rooms:', error);  // Log the error
    res.status(500).send('Error retrieving rooms: ' + error.message);
  }
};  */
// save/create all rooms

exports.saveBooking = async (req, res) => {
  const { consultantID, courseID, selectedWeek, selectedDay, selectedRoom, selectedTimeSlots } = req.body;
  
  try {

    if (!consultantID || !courseID || !selectedWeek || !selectedDay || !selectedRoom || !selectedTimeSlots) {
       console.log(req.body)
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Ensure selectedTimeSlots is an array. uh if we send a record may need to  Parse the JSON Properly
    const timeSlots = Array.isArray(selectedTimeSlots)
      ? selectedTimeSlots
      : JSON.parse(selectedTimeSlots);
    
    const bookingDate = getISOWeekDate(new Date().getFullYear(), selectedWeek, selectedDay);
    // Loop over selected time slots and create booking records
    for (const timeSlotID of selectedTimeSlots) {
      const newBooking = await Booking.create({
        consultantID,
        courseID,
        date: mondayOfWeek,
        week: selectedWeek,
        day: selectedDay,
        roomID: selectedRoom,
        timeSlotID: timeSlotID,
      });
    }

    res.status(201).json({ message: 'Bookings saved successfully!' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ message: 'Error saving booking' });
  }
};

/* exports.createBooking = async (req, res) => {
    // Logic for creating a booking
    const { consultantID, courseID, roomID, date, timeSlotID } = req.body;
    try {
                // First, check if the time slot is already booked
                const slot = await TimeSlot.findByPk(timeSlotID);
                if (slot.isBooked) {
                    return res.status(400).send({ message: 'Time slot already booked' });
                }
// Create the new booking
        const newBooking = await Booking.create({
            consultantID,
            courseID,
            roomID,
            date,
            timeSlotID
        });
                // Mark the time slot as booked
                slot.isBooked = true;
                await slot.save();

        res.status(201).send({ message: 'Room booked successfully', booking: newBooking });
    } catch (error) {
        res.status(500).send('Error booking room: ' + error.message);
    }
}; */