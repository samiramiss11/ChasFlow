const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Room extends Model {}

Room.init({
    roomID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, field: 'roomID'},
    roomName: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'roomName'},
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, field: 'created_at'},
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW, field: 'updated_at'}

}, 
{
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
    timestamps: 'true',
    roomID: 'number',
    roomName: 'string',
    underscored: true
});

module.exports = Room;
