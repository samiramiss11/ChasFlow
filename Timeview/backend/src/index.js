//entry point of the application.
require('dotenv').config();
const app = require('./app.js'); // Import Express application
const db = require('./config/dbConfig'); // Database configuration

const PORT = process.env.PORT || 3000;

// Ensures the database is connected before starting the server
db.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  