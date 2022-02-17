const PatientInfo  = require('../models/patientInfo');
// const { PatientInfo, validate } = require('../models/patientInfo')
const express = require('express');
const router = express.Router();
const Crypto =require('crypto')

router.get('/', async (req, res) => {
    try {
        const patientsInfo = await PatientInfo.find();
        return res.send(patientsInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const patientInfo = await PatientInfo.findById(req.params.id);

        if (!patientInfo)
            return res.status(400).send(`The patient with id "${req.params.id}" does not exist.`);
        
        return res.send(patientInfo);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



router.post('/', async (req, res) => {
    try {
        // const { error } = validate(req, res);
        // if (error)
        //     return res.status(400).send(error.detals[0].message);
        function randomString(size = 21) {  
            return Crypto
              .randomBytes(size)
              .toString('hex')
              .slice(0, size)
          }
          
          console.log(  
            randomString()
          )

        const patient = new PatientInfo({
            
            _id: randomString(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
        });

        await patient.save();

        return res.send(patient);

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.put('/:id', async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // if (error) return res.status(400).send(error);

        const patientInfo = await PatientInfo.findByIdAndUpdate(
            req.params.id, 
            {
                
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,

            },
            { new: true }
        );
        if (!patientInfo)
            return res.status(400).send(`The patient with id "${req.params.id}" does not exist.`);

        await patientInfo.save();

        return res.send(patientInfo);
    }  catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const patientInfo = await PatientInfo.findByIdAndRemove(req.params.id);

        if (!patientInfo)
            return res.status(400).send(`The patient with id "${req.params.id}" does not exist.`);
        
            return res.send(patientInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})


module.exports = router;