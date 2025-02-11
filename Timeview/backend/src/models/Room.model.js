const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Room extends Model {}

Room.init({
    roomID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    roomName: { type: DataTypes.STRING, allowNull: false, unique: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    sequelize,
    modelName: 'Room'
});

module.exports = Room;
