const express = require('express');
const router = express.Router();

// Test endpoint
router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

module.exports = router;
