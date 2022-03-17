require('dotenv').config();
const { BlogPosts, User, Categories } = require('../models');

const listPosts = async (_req, res, next) => {
  try {
    const getPost = await BlogPosts.findAll({
      include: [{
        attributes: { exclude: ['password'] },
        model: User,
        as: 'user',
        
      }, {
        model: Categories,
        as: 'categories',
      
      }],
      
    });
  
  return res.status(200).json(getPost);
  } catch (error) {
next(error);
  }
};

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const getPost = await BlogPosts.findByPk(id, {
      include: [{
        attributes: { exclude: ['password'] },
        model: User,
        as: 'user',
        
      }, {
        model: Categories,
        as: 'categories',
      
      }],
      
    });
    const postExist = await BlogPosts.findOne({ where: { id } });

    if (!postExist) return res.status(404).json({ message: 'Post does not exist' });
  
    return res.status(200).json(getPost);
  } catch (error) {
next(error);
  }
};

module.exports = { listPosts, getPostById };