const mongoose = require('mongoose')
const Joi = require('joi');
const patientSchema = require('./patientInfo')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true },
    overdue: { type: [patientSchema], default: [] },
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;