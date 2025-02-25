const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Week extends Model {}

Week.init({
  weekID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  year: { type: DataTypes.INTEGER, allowNull: false },  // Added year field
  weekNumber: { type: DataTypes.INTEGER, allowNull: false },
  startDate: { type: DataTypes.DATEONLY, allowNull: false },
  endDate: { type: DataTypes.DATEONLY, allowNull: false }, // Added endDate field
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW, onUpdate: DataTypes.NOW } // Added updated_at field
}, {
  sequelize,
  modelName: 'Week',
  tableName: 'Weeks',
  timestamps: true,
  underscored: true
});

module.exports = Week;

