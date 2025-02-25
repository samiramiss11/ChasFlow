// Main entry point for server
require('dotenv').config();
const app = require('./app.js'); 
const db = require('./config/dbConfig'); 
//const express = require('express');
//const router = express.Router();


const PORT = process.env.PORT || 3000;

// this ensures the database is connected before starting the server
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

