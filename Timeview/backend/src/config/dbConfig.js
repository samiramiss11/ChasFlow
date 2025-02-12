const Sequelize = require('sequelize');

// Use environment variables to configure the connection
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
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
