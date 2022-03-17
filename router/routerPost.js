const express = require('express');
const { listPosts, getPostById } = require('../controllers/posts');
 
const validation = require('../middlewares/validations');

const router = express.Router();

router.get(
    '/', 
    
    validation.tokenMid,
    listPosts,
    
);

router.get(
    '/:id', 
    validation.tokenMid,
    getPostById,
);

module.exports = router;