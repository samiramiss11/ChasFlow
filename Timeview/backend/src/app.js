const express = require('express');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
//const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Configure CORS to allow  frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Allow only frontend origin, adjust if  frontend port changes
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify methods to allow
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow cookies to be sent with requests
}));

// Middleware configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
//app.use(errorHandler);


module.exports = app;
