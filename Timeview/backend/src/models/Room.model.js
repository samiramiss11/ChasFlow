const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Room extends Model {}

Room.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    roomName: {
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
    modelName: 'Room',
    tableName: 'room',
    timestamps: false
});

module.exports = Room;
