const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Course extends Model {}

Course.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at'
    }
}, {
    sequelize,
    modelName: 'Course',
    tableName: 'course',
    timestamps: false
});

module.exports = Course;
