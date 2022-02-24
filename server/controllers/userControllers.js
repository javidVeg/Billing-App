// const asyncHandler = require('express-async-handler')
// const express= require('express')
// const User = require('../models/user.js')
// const Crypto =require('crypto')
// const router = express.Router();


// router.post('/', async (req, res) => {
//     try {
//         function randomString(size = 21) {  
//             return Crypto
//               .randomBytes(size)
//               .toString('hex')
//               .slice(0, size)
//           }
          
//           console.log(  
//             randomString()
//           )

//         const user = new User({
            
//             _id: randomString(),
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             phoneNumber: req.body.phoneNumber,
//         });

//         await user.save();

//         return res.send(user);

//     }   catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });


// // const registerUser = asyncHandler(async (req, res) => {
// //     const { name, email, password, pic } = req.body;
  
// //     const userExists = await User.findOne({ email });
  
// //     if (userExists) {
// //       res.status(404);
// //       throw new Error("User already exists");
// //     }
  
// //     const user = await User.create({
// //       name,
// //       email,
// //       password,
// //       pic,
// //     });

// //     function randomString(size = 21) {  
// //         return Crypto
// //           .randomBytes(size)
// //           .toString('hex')
// //           .slice(0, size)
// //       }
      
// //       console.log(  
// //         randomString()
// //       )
  
// //     if (user) {
// //       res.status(201).json({
// //         _id: randomString(),
// //         name: user.name,
// //         email: user.email,
// //         isAdmin: user.isAdmin,
// //         pic: user.pic,
// //         // token: generateToken(user._id),
// //       });
// //     } else {
// //       res.status(400);
// //       throw new Error("User not found");
// //     }
// //   });
// module.exports= router;
// // module.exports= {registerUser}


