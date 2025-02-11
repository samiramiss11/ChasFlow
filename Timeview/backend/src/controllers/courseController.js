const { Course } = require('../models');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).send('Server Error: ' + error.message);
    }
};
