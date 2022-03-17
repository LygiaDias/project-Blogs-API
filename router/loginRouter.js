const express = require('express');
const { login } = require('../controllers/user');
 
const validation = require('../middlewares/validations');

const router = express.Router();

router.post(
    '/', 
    validation.emailValidation,
    validation.passwordValidation,
    
    login,
    
);

    module.exports = router;