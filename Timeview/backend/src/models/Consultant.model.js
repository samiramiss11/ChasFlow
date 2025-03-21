const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Consultant extends Model {}

Consultant.init({
    consultantID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    companyName: { type: DataTypes.STRING },
    mobile: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING, defaultValue: 'active' },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    sequelize,
    modelName: 'Consultant',
    tableName: 'consultants',
      timestamps: false, 
});

module.exports = Consultant;
