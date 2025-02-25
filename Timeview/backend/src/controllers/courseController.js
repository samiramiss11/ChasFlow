const { Course } = require('../models');

exports.getAllCourses = async (req, res) => {
    try {
        console.log("Fetching active courses...");
        const courses = await Course.findAll({
            attributes: ['courseID', 'courseCode'], // 'courseCode' field to the response
        });
        console.log('Consultants fetched:', courses);
        res.json(courses);
    } catch (error) {
        res.status(500).send('Server Error: ' + error.message);
    }
};
