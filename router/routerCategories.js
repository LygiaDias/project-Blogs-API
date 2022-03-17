const express = require('express');
const { createCategories, listCategories } = require('../controllers/categories');
 
const validation = require('../middlewares/validations');

const router = express.Router();

router.post(
    '/', 
    
    validation.tokenMid,
    createCategories,
    
);

router.get(
    '/',
    validation.tokenMid,
    listCategories,
);

    module.exports = router;