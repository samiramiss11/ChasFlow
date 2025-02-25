// Express app configuration
const express = require('express');
const bodyParser = require('body-parser');
const consultantRoutes = require('./routes/consultantRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors');
//const getAvailableTimeSlots = require('./routes/bookingRoutes');
const roomRoutes = require('./routes/roomRoutes');
//const authMiddleware = require('./middlewares/authMiddleware'); 



const app = express();
//app.use(bodyParser.json());


// Configure CORS to allow  frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow only frontend origin, we can adjust if  frontend port changes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies to be sent with requests
}));

// Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/consultants', consultantRoutes);
app.use('/api', roomRoutes);




// below is Error Handling Middleware,(uncomment if you wish to use it)
//app.use(errorHandler);
module.exports = app;
