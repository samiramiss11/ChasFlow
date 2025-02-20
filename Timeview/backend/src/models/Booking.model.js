// All models are Class-Based Model Definition (ES6 Style)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Booking extends Model {}

Booking.init({
    bookingID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'bookingID'},
    consultantID: { type: DataTypes.INTEGER, allowNull: false, field: 'consultantID'},
    courseID: { type: DataTypes.INTEGER, allowNull: false ,field: 'courseID'},
    roomID: { type: DataTypes.INTEGER, allowNull: false ,field: 'roomID'},
    date: { type: DataTypes.DATEONLY, allowNull: false ,field: 'date'},
    timeSlotID: { type: DataTypes.INTEGER, allowNull: false ,field: 'timeSlotID'},
    weekID: { type: DataTypes.INTEGER, allowNull: false ,field: 'week'},
    day: { type: DataTypes.STRING, allowNull: false ,field: 'day'},
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW , field: 'created_at'},
    updated_at: {type: DataTypes.DATE, defaultValue: DataTypes.NOW, field: 'updated_at'}
}, {
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings', 
    timestamps: true, // 
    underscored: true,
    foreignKey: {
        name: 'consultantID',
        references: {
            model: 'Consultant',
            key: 'consultantID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    foreignKey: {
        name: 'timeSlotID',
        references: {
            model: 'TimeSlot',
            key: 'timeSlotID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    foreignKey: {
        name: 'roomID',
        references: {
          model: 'Room',
          key: 'roomID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
    foreignKey: {
        name: 'weekID',
        references: {
            model: 'Week',
            key: 'weekID'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
});

module.exports = Booking;
