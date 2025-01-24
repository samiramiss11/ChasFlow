const User = require('./User.model');
const Room = require('./Room.model');
const Course = require('./Course.model');
const Event = require('./Event.model');

// Define relationships between all models
Event.belongsTo(Room, {foreignKey: 'roomId'});
Room.hasMany(Event, {foreignKey: 'roomId'});

Event.belongsTo(Course, {foreignKey: 'courseId'});
Course.hasMany(Event, {foreignKey: 'courseId'});

module.exports = {
    User,
    Room,
    Course,
    Event
};
