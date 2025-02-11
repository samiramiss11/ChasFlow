const express = require('express');
const { getAllCourses } = require('../controllers/courseController');
const router = express.Router();

router.get('/courses', getAllCourses);

module.exports = router;
