const User = require('./User.model');
const Consultant = require('./Consultant.model');
const Room = require('./Room.model');
const Course = require('./Course.model');
const Booking = require('./Booking.model');
const TimeSlot = require('./TimeSlot.model');

// Define model associations
Consultant.hasMany(Booking, { foreignKey: 'consultantID' });
Booking.belongsTo(Consultant, { foreignKey: 'consultantID' });

Room.hasMany(Booking, { foreignKey: 'roomID' });
Booking.belongsTo(Room, { foreignKey: 'roomID' });

Course.hasMany(Booking, { foreignKey: 'courseID' });
Booking.belongsTo(Course, { foreignKey: 'courseID' });

TimeSlot.hasMany(Booking, { foreignKey: 'timeSlotID' });
Booking.belongsTo(TimeSlot, { foreignKey: 'timeSlotID' });

// Export all models
module.exports = {
    User,
    Consultant,
    Room,
    Course,
    Booking,
    TimeSlot
};
