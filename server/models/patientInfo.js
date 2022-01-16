const mongoose = require('mongoose');
const Joi = require('joi');

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
});

const PatientInfo = mongoose.model('Patient Info', patientSchema);

function validatePatientInfo(patientInfo) {
    const schema = Joi.object({
        lastName: Joi.string().min(2).max(20).required(),
        lastName: Joi.string().min(2).max(20).required(),
        phoneNumber: Joi.number().min(10).max(12).required(),
    });
    return schema.validate(patientInfo);
}

exports.Patient = PatientInfo;
exports.validate = validatePatientInfo;
exports.patientSchema = patientSchema;

module.exports = PatientInfo;