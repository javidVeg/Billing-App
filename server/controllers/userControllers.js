const asyncHandler = require('express-async-handler')
const express= require('express')
const User = require('../models/user.js')
const Crypto =require('crypto')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')




//@desc     Register User
//@route    POST /api/auth
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
    const{ name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all feilds')
    }

    //Check if user exists
    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalidd user data')
    }
})

//@desc     Log In User
//@route    POST /api/auth/login
//@access   Public
const logInUser = asyncHandler(async (req, res) => {

    const  {email, password} = req.body

    //Check for user
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid credentials')
    }
})


//@desc     Get User data
//@route    GET /api/auth/me
//@access   Private
const getME = asyncHandler(async (req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, config.get('jwtSecret'), {
        expiresIn: '30d',
    })
}

module.exports= {
    registerUser,
    logInUser,
    getME,
}


