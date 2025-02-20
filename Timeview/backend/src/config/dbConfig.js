const Sequelize = require('sequelize');
// keep this,Use environment variables to configure the connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    define: {
        logging: false,  // Toggle console logging
        underscored: false, // Use snake_case rather than camelCase for database attributes
        timestamps: true // Enable automatic handling of createdAt and updatedAt
    },
   
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