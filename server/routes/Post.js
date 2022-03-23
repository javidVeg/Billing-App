// const express = require('express')
// const { commentPost } = require('../controllers/postControllers') 

// const router = express.Router();


// router.post('/commentPost', commentPost);

// module.exports = router; 
const express = require('express')

const { 
    getPosts, 
    createPost, 
    updatePost, 
    // commentPost, 
    deletePost } = require ('../controllers/postControllers');

const router = express.Router();





const { protect } = require('../middleware/midd-auth')

router.route('/').get(protect, getPosts).post( createPost)
router.route('/:id').delete(protect, deletePost).put(protect, updatePost)

// router.get('/', getPosts);
// router.get('/:id', getPost);
// router.get('/', getPosts);
// router.post('/', createPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.post('/:id/commentPost', commentPost);

module.exports = router;