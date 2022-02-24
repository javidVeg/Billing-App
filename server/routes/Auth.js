const  User  = require('../models/user');
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();
const Crypto = require('crypto')


//-------------REGISTERS A NEW USER------------//
router.post('/', async (req, res) => {
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');

        function randomString(size = 21) {  
            return Crypto
              .randomBytes(size)
              .toString('hex')
              .slice(0, size)
          }
          
          console.log(  
            randomString()
          )
        
        const salt = await bcrypt.genSalt(10);
        const users = new User({
            
            _id: randomString(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
            isAdmin: req.body.isAdmin,
            profilePicture: req.body.profilePicture
            
        });

        

        await users.save();

        const token = users.generateAuthToken(); 

        return res
        .header('x-auth-token', token)
        .header('access-control-expose-headers', 'x-auth-token')
        .send({ _id: users._id, name: users.firstName + " " + users.lastName, email: users.email})
        

    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//----------THIS IS TO LOGIN-----------//
router.post('/login', async(req, res) => {
    try{
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Invalid email or password.');

        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword) return res.status(400).send('Invalid email or password. BCRYPT');

        const token = user.generateAuthToken();
        
        return res.send(token);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`); 
    }
});

module.exports = router; 