

// Import models
const User = require('./User.model');
const Consultant = require('./Consultant.model');
const Room = require('./Room.model');
const Course = require('./Course.model');
const Booking = require('./Booking.model');
const TimeSlot = require('./TimeSlot.model');
const Week = require('./Week.model');
//(sequelize, Sequelize.DataTypes)

// Define model associations
Consultant.hasMany(Booking, { foreignKey: 'consultantID', onDelete: 'SET NULL' });
Booking.belongsTo(Consultant, { foreignKey: 'consultantID' });

Room.hasMany(Booking, { foreignKey: 'roomID', onDelete: 'SET NULL' });
Booking.belongsTo(Room, { foreignKey: 'roomID' });
Room.hasMany(TimeSlot, { foreignKey: 'roomID', as: 'timeSlots' });
TimeSlot.belongsTo(Room, { foreignKey: 'roomID', as: 'Room' });

Course.hasMany(Booking, { foreignKey: 'courseID', onDelete: 'SET NULL' });
Booking.belongsTo(Course, { foreignKey: 'courseID' });

TimeSlot.hasMany(Booking, { foreignKey: 'timeSlotID', as: 'bookings', onDelete: 'SET NULL' });
Booking.belongsTo(TimeSlot, { foreignKey: 'timeSlotID', as: 'timeSlots' });

Week.hasMany(Booking, { foreignKey: 'weekID', onDelete: 'SET NULL' });
Booking.belongsTo(Week, { foreignKey: 'weekID' });

// Export all models
module.exports = {
    User,
    Consultant,
    Room,
    Course,
    Booking,
    TimeSlot,
    Week
};


/*
const User = require('./User.model');
const Week = require('./Week.model');
const Consultant = require('./Consultant.model');
const Room = require('./Room.model');
const Course = require('./Course.model');
const Booking = require('./Booking.model');
const TimeSlot = require('./TimeSlot.model');

// Define model associations
Week.hasMany(Booking, { foreignKey: 'weekID' });
Booking.belongsTo(Week, { foreignKey: 'weekID' });

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
    TimeSlot,
    Week
};
*/