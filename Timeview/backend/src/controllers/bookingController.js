//the logic to handle booking creation, deletion, and modification.
const { Booking, Room, Consultant, TimeSlot, Course } = require('../models');

exports.createBooking = async (req, res) => {
    // Logic for creating a booking
    const { consultantID, courseID, roomID, date, timeSlotID } = req.body;
    try {
                // First, check if the time slot is already booked
                const slot = await TimeSlot.findByPk(timeSlotID);
                if (slot.isBooked) {
                    return res.status(400).send({ message: 'Time slot already booked' });
                }

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
};

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
