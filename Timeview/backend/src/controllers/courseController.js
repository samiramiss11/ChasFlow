const { Course } = require('../models');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.findAll({
            attributes: ['courseID', 'courseCode'], // 'courseCode' field to the response
        });
        res.json(courses);
    } catch (error) {
        res.status(500).send('Server Error: ' + error.message);
    }
};
