const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Room = require('./Room.model');
const Course = require('./Course.model');

class Event extends Model {}

Event.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Room,
            key: 'id'
        }
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    eventType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    }
}, {
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
});

module.exports = Event;
