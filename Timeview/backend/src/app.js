// Express app configuration
const express = require('express');
const bodyParser = require('body-parser');
const consultantRoutes = require('./routes/consultantRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
//const roomRoutes = require('./routes/roomRoutes');

const app = express();
//app.use(bodyParser.json());

// Configure CORS to allow  frontend origin
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow only frontend origin, we can adjust if  frontend port changes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify methods to allow
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies to be sent with requests
  })
);

// Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
//app.use('/consultan', consultantRoutes);
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/consultants', consultantRoutes);

// below is Error Handling Middleware,(uncomment if you wish to use it)
//app.use(errorHandler);
module.exports = app;
