require('dotenv').config();
const { Categories } = require('../models');

const createCategories = async (req, res) => {
    try {
      const { name } = req.body;
  
      const created = await Categories.create({ name });
    
      return res.status(201).json(created);
    } catch (error) {
        return res.status(400).json({ message: '"name" is required' });
    }
  };

  const listCategories = async (_req, res, next) => {
    try {
  const getCategories = await Categories.findAll();
    
    return res.status(200).json(getCategories);
    } catch (error) {
next(error);
    }
  };

 module.exports = { createCategories, listCategories };