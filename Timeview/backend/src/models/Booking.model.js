// All models are Class-Based Model Definition (ES6 Style)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Booking extends Model {}

Booking.init({
    bookingID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    consultantID: { type: DataTypes.INTEGER, allowNull: false },
    courseID: { type: DataTypes.INTEGER, allowNull: false },
    roomID: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATEONLY, allowNull: false },
    timeSlotID: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    sequelize,
    modelName: 'Booking',
    foreignKey: {
        name: 'consultantID',
        references: {
            model: 'Consultant',
            key: 'consultantID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
});

module.exports = Booking;
