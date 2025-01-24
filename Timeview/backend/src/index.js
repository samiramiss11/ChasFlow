
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Welcome to SchemaApp API!');
});

module.exports = router;
