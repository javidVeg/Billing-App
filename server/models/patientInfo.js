const mongoose = require('mongoose');
const Joi = require('joi');




const patientSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
});

const PatientInfo = mongoose.model('Patient', patientSchema);



module.exports = PatientInfo;

 