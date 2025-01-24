const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    passwordHash: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
    created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
  }, {
    timestamps: false
  });
module.exports = User;
