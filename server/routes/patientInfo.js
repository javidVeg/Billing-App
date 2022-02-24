const PatientInfo  = require('../models/patientInfo');
const User = require('../models/user');
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();
const Crypto = require('crypto')
const auth = require('../middleware/midd-auth')
const admin = require('../middleware/Midd-admin')
// const { PatientInfo, validate } = require('../models/patientInfo')


router.get('/', auth,  async (req, res) => {
    try {
        const patientsInfo = await PatientInfo.find();
        return res.send(patientsInfo);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.get('/:id', auth,  async (req, res) => {
    try {
        const patientInfo = await PatientInfo.findById(req.params.id);

        if (!patientInfo)
            return res.status(400).send(`The patient with id "${req.params.id}" does not exist.`);
        
        return res.send(patientInfo);

    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



router.post('/', auth, async (req, res) => {
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


// router.post('/users', auth, async (req, res) => {
//     try {

//         let user = await User.findOne({ email: req.body.email });
//         if (user) return res.status(400).send('User already registered.');

//         function randomString(size = 21) {  
//             return Crypto
//               .randomBytes(size)
//               .toString('hex')
//               .slice(0, size)
//           }
          
//           console.log(  
//             randomString()
//           )
        
//         const salt = await bcrypt.genSalt(10);
//         const users = new User({
            
//             _id: randomString(),
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: await bcrypt.hash(req.body.password, salt),
//             isAdmin: req.body.isAdmin,
//             profilePicture: req.body.profilePicture
            
//         });

//         await users.save();

//         // return res.send(users);
//         return res.send({ _id: users._id, email: users.email });

//     }   catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

router.put('/:id', auth,  async (req, res) => {
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

router.delete('/:id', [auth, admin], async (req, res) => {
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