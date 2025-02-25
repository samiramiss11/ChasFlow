const express = require('express');
const { getAllCourses } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getAllCourses);

module.exports = router;
