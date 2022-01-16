const PatientInfo = require('../models/patientInfo');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const patient = new PatientInfo({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
        });
        
        await patient.save();

        return res.send(patient);
    }   catch (ex) {
        return res.status(500).send('Internal Server Error: ${ex}');
    }
});

module.exports = router;