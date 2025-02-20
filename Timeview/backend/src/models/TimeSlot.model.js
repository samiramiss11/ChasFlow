const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class TimeSlot extends Model {}

TimeSlot.init({
    timeSlotID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'timeSlotID'},
    startTime: { type: DataTypes.TIME, allowNull: false, field: 'startTime'},
    endTime: { type: DataTypes.TIME, allowNull: false, field: 'endTime'},
    roomID: { type: DataTypes.INTEGER, allowNull: false ,field: 'roomID'},
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, field: 'created_at'},
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
        field: 'updated_at'
    }
}, {
    sequelize,
    tableName: 'timeslots',
    modelName: 'TimeSlot',
    attributes: ['timeSlotID', 'startTime', 'endTime'],
    timestamps: true,
    underscored: true
});

module.exports = TimeSlot;
