require('dotenv').config();
const { User } = require('../models');
const getToken = require('../helpers/tokenGenerator');

const createUser = async (req, res, next) => {
    try {
      const { displayName, email, password, image } = req.body;
  
      const getEmail = await User.findOne({ where: { email } });
    
      if (getEmail) return res.status(409).json({ message: 'User already registered' });
    
      const created = await User.create({ displayName, email, password, image });
    
      const token = getToken({ displayName, id: created.id });
    
      return res.status(201).json({ token });
    } catch (error) {
next(error);
    }
  };

  const login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      const getUser = await User.findOne({ where: { email, password } });
    
      if (!getUser) return res.status(400).json({ message: 'Invalid fields' });
      
      const token = getToken({ email, password });
    
      return res.status(200).json({ token });
    } catch (error) {
next(error);
    }
  };

  const getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const getUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
      const userExist = await User.findOne({ where: { id } });

      if (!userExist) return res.status(404).json({ message: 'User does not exist' });
    
      return res.status(200).json(getUser);
    } catch (error) {
next(error);
    }
  };
  
  const listUser = async (req, res, next) => {
    try {
  const getUser = await User.findAll({
    attributes: { exclude: ['password'] },
  });
    
    return res.status(200).json(getUser);
    } catch (error) {
next(error);
    }
  };

module.exports = { createUser, login, listUser, getUserById };