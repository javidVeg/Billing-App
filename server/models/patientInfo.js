const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
});

const PatientInfo = mongoose.model('Patient Info', patientSchema);

module.exports = PatientInfo;