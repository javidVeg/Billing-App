const  User  = require('../models/user');
const bcrypt = require('bcrypt')
const express = require('express');
const router = express.Router();
const Crypto = require('crypto')
const { registerUser, logInUser, getME } = require('../controllers/userControllers')
const { protect } = require('../middleware/midd-auth')

router.post('/register', registerUser)
router.post('/login', logInUser)
router.get('/me', protect, getME)
// //-------------REGISTERS A NEW USER------------//
// router.post('/', async (req, res) => {
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

//         const token = users.generateAuthToken(); 

//         // DOES: creates token in the local storage header
//         return res
//         .header('x-auth-token', token)
//         .header('access-control-expose-headers', 'x-auth-token')
//         .send({ _id: users._id, name: users.firstName + " " + users.lastName, email: users.email})
        

//     }   catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`);
//     }
// });

// //----------THIS IS TO LOGIN-----------//
// // const verifyUserLogin = async (email,password)=>{
// //     try {
// //         const user = await User.findOne({email}).lean()
// //         if(!user){
// //             return {status:'error',error:'user not found'}
// //         }
// //         if(await bcrypt.compare(password,user.password)){
// //             // creating a JWT token
// //             token = jwt.sign({id:user._id,username:user.email,type:'user'},JWT_SECRET,{ expiresIn: '2h'})
// //             return {status:'ok',data:token}
// //         }
// //         return {status:'error',error:'invalid password'}
// //     } catch (error) {
// //         console.log(error);
// //         return {status:'error',error:'timed out'}
// //     }
// // }
// // router.post('/login',async(req,res)=>{
// //     const {email,password}=req.body;
// //     // we made a function to verify our user login
// //     const response = await verifyUserLogin(email,password);
// //     if(response.status==='ok'){
// //         // storing our JWT web token as a cookie in our browser
// //         res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
// //         res.redirect('/');
// //     }else{
// //         res.json(response);
// //     }
// // });

// router.post('/login', async(req, res) => {
//     try{
//         let user = await User.findOne({ email: req.body.email });
//         if (!user) return res.status(400).send('Invalid email or password.');

//         const validPassword = await bcrypt.compare(req.body.password, user.password);
        
//         if(!validPassword) return res.status(400).send('Invalid email or password. BCRYPT');

        

//         const token = user.generateAuthToken();
//         // DOES: sends JWT from server back to the client

//         return res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: false });

//         if(!validPassword) return res.status(400).send('Invalid email or password. BCRYPT');

//     } catch (ex) {
//         return res.status(500).send(`Internal Server Error: ${ex}`); 
//     }
// });

module.exports = router; 