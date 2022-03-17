const express = require('express');
const { createUser, listUser, getUserById } = require('../controllers/user');
 
const validation = require('../middlewares/validations');

const router = express.Router();

router.post(
    '/', 
    validation.emailValidation,
    validation.displayNameValidation,
    validation.passwordValidation,
    createUser,
    
);
router.get(
    '/',
    validation.tokenMid,
    listUser,
);

router.get(
    '/:id', 
    validation.tokenMid,
    getUserById,
);
    module.exports = router;