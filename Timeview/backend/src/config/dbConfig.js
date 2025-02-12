require('dotenv').config();
require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false,  // Toggle console logging
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.log('Database connection error: ' + err));
    .then(() => console.log('Database connected successfully.'))
    .catch(err => console.log('Database connection error: ' + err));

module.exports = sequelize;
