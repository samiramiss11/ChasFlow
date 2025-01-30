const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/dbConfig');

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    passwordHash: { type: DataTypes.STRING },
    isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
    companyName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: false  // Disable Sequelize automatic timestamping if you are manually defining created_at
});

module.exports = User;
