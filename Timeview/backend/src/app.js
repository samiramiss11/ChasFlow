const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const roomRoutes = require('./routes/roomRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import routes
// const routes = require('./routes');

// Use routes
// app.use('/api', routes);
app.use('/api/rooms', roomRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
