// Express app configuration
const express = require('express');
<<<<<<< Updated upstream
const bodyParser = require('body-parser');
=======
const consultantRoutes = require('./routes/consultantRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const courseRoutes = require('./routes/courseRoutes');
>>>>>>> Stashed changes
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

<<<<<<< Updated upstream
// Import routes
// const routes = require('./routes');

// Use routes
// app.use('/api', routes);
app.use('/api/rooms', roomRoutes);
=======
// Configure CORS to allow  frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow only frontend origin, we can adjust if  frontend port changes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify methods to allow
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies to be sent with requests
}));

// Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
//app.use('/consultan', consultantRoutes);
app.use('/api/bookings', bookingRoutes);
>>>>>>> Stashed changes
app.use('/api/auth', authRoutes);
app.use('/api', courseRoutes);
app.use('/api', consultantRoutes);

<<<<<<< Updated upstream
=======

// below is Error Handling Middleware,(uncomment if you wish to use it)
//app.use(errorHandler);


>>>>>>> Stashed changes
module.exports = app;
