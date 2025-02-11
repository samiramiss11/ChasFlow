//using the exports.functionName = async
const { Consultant } = require('../models');

exports.getAllConsultants = async (req, res) => {
    try {
        const consultants = await Consultant.findAll({
            where: { status: 'active' } // Fetching only active consultants
        });
        res.json(consultants);
    } catch (error) {
        res.status(500).send('Error retrieving consultants: ' + error.message);
    }
};

exports.createConsultant = async (req, res) => {
    const { firstName, lastName, username, email, companyName, mobile } = req.body;
    if (!firstName || !lastName || !username) {
        return res.status(400).send('Missing required fields: firstName, lastName, or username.');
    }
    try {
        const existingUser = await Consultant.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).send('Username already in use.');
        }
        const newConsultant = await Consultant.create({
            firstName, lastName, username, email, companyName, mobile, status: 'active'
        });
        res.status(201).send({ message: 'Consultant created successfully', consultant: newConsultant });
    } catch (error) {
        res.status(500).send('Error creating consultant: ' + error.message);
    }
};

exports.getConsultantById = async (req, res) => {
    const { consultantID } = req.params;
    try {
        const consultant = await Consultant.findByPk(consultantID);
        if (consultant) {
            res.json(consultant);
        } else {
            res.status(404).send('Consultant not found.');
        }
    } catch (error) {
        res.status(500).send('Error fetching consultant: ' + error.message);
    }
};

exports.updateConsultant = async (req, res) => {
    res.send('Consultant updated.');
};

exports.deactivateConsultant = async (req, res) => {
    const { consultantID } = req.params;
    try {
        const consultant = await Consultant.findByPk(consultantID);
        if (consultant) {
            consultant.status = 'inactive';
            await consultant.save();
            res.send('Consultant has been deactivated.');
        } else {
            res.status(404).send('Consultant not found.');
        }
    } catch (error) {
        res.status(500).send('Error deactivating consultant: ' + error.message);
    }
};
