const express = require('express');
const consultantController = require('../controllers/consultantController');
//const { getAllConsultants,  } = require('../controllers/courseController');
const router = express.Router();


router.get('/', consultantController.getAllConsultants);
router.get('/:consultantID', consultantController.getConsultantById);
router.post('/', consultantController.createConsultant);
router.put('/:id', consultantController.updateConsultant);
router.delete('/:id', consultantController.deactivateConsultant);

module.exports = router;
