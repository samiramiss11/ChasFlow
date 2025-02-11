const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class TimeSlot extends Model {}

TimeSlot.init({
    timeSlotID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startTime: { type: DataTypes.TIME, allowNull: false },
    endTime: { type: DataTypes.TIME, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    sequelize,
    modelName: 'TimeSlot'
});

module.exports = TimeSlot;
