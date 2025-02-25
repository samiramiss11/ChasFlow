const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Course extends Model {}

Course.init({
    courseID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    courseCode: { type: DataTypes.STRING, allowNull: false, unique: true },
    courseName: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses'
});

module.exports = Course;
