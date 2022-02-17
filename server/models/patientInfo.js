const mongoose = require('mongoose');
const Joi = require('joi');




const patientSchema = new mongoose.Schema({
    _id: { type: String, required: true},
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: String, required: true},
});

const PatientInfo = mongoose.model('Patient', patientSchema);

// const validatePatientInfo = (patientInfo) => {
//     const schema = Joi.object({
//          id:
//         firstName: Joi.string().min(2).max(20).required(),
//         lastName: Joi.string().min(2).max(20).required(),
//         phoneNumber: Joi.string().min(10).max(12).required(),
//     });
//     return schema.validatePatientInfo(patientInfo);
// }

// exports.PatientInfo = PatientInfo;
// exports.validate = validatePatientInfo;
// exports.patientSchema = patientSchema;

module.exports = PatientInfo;
// module.exports = patientSchema;

 