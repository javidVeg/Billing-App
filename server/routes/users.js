const { User } = require('../models/user');
const { validate } = require('../models/patientInfo');
const PatientInfo = require('../models/patientInfo')
const express = require('express');
const router = express.Router();

router.post('/:userId/overdue/:patientId', async (req, res) => { 
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        const patientInfo = await PatientInfo.findById(req.params.patientId);
        if (!patientInfo) return res.status(400).send(`The patient with id "${req.params.patientId}" does not exist.`);
    
        user.overdue.push(patient);    
        
        await user.save();
        return res.send(user.overdue);

    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`); }
});

router.put('/:userId/overdue/:patientId', async (req, res) => { 
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        const patientInfo = user.overdue.id(req.params.patientId);
        if (!patientInfo) return res.status(400).send(`The patient with id "${req.params.patientId}" does not in the users shopping cart.`);
        
        patient.firstName = req.body.firstName;
        patient.lastName = req.body.lastName;
        patient.phoneNumber = req.body.phoneNumber;
       

        await user.save();
        return res.send(patientInfo);
        } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`); }
});

router.delete('/:userId/overdue/:patientId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send(`The user with id "${req.params.userId}" does not exist.`);

        let patientInfo = user.overdue.id(req.params.patientId);
        if (!patientInfo) return res.status(400).send(`The patient with id "${req.params.patientId}" does not in the users shopping cart.`);
        
        patientInfo = await patient.remove();
        
        await user.save();
        return res.send(patientInfo);
         } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    } 
});

module.exports = router;