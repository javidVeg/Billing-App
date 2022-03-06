const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken')
// const Joi = require('joi');




const userSchema = new mongoose.Schema({
    // _id: { type: String, required: true },
    // firstName: { type: String, required: true} ,
    // lastName: { type: String, required: true },
    // email: { type: String, required: true },
    // password: { type: String, required: true },
    // isAdmin: { type: Boolean, required: true, default: true, },
    // profilePicture: { type: String, required: true, default: "https://i.ibb.co/ZzztkVK/default-profile-photo.jpg" }

    name: { type: String, required: [true, 'Add your name!'] },
    email: { type: String, required: [true, 'Add your email'], unique: true },
    password: { type: String, required: [true, 'Add a password'] },
},
{
    timestamps: {required: true}
});

// userSchema.methods.generateAuthToken = function (){
//     return jwt.sign({ _id: this._id, name: this.firstName + " " + this.lastName, isAdmin: this.Admin }, config.get('jwtSecret'));
// };

const User = mongoose.model("User", userSchema);
module.exports= User;

