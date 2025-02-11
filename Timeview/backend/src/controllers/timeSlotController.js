// src/controllers/timeSlotController.js

exports.fetchAvailableTimeSlots = async (req, res) => {
    const { roomID, date } = req.query;  // Consider passing the date to filter time slots for specific days
    try {
        const availableSlots = await TimeSlot.findAll({
            where: {
                roomID,
                date,   // Assuming you add a date field or logic to handle this
                isBooked: false
            }
        });
        res.json(availableSlots);
    } catch (error) {
        res.status(500).send('Error fetching time slots: ' + error.message);
    }
};
