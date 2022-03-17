const jwt = require('jsonwebtoken');

function displayNameValidation(req, res, next) {
    const { displayName } = req.body;
    const MIN_NUMBER = 8;
    
  if (displayName.length < MIN_NUMBER) {
return res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
}

    return next();
}

function emailValidation(req, res, next) {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    const regexValidation = emailRegex.test(email);
    
    if (email === '') {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }
    if (!email) {
        return res.status(400).json({ message: '"email" is required' });
        } 
    if (!regexValidation) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
return next();
}

function passwordValidation(req, res, next) {
    const { password } = req.body;
    const MIN_NUMBER = 6;
    
    if (password === '') {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
    if (!password) {
        return res.status(400).json({ message: '"password" is required' });
        } 
    if (password.length < MIN_NUMBER) {
         return res.status(400).json({ message: '"password" length must be 6 characters long' });
     }
return next();
}

const tokenMid = async (req, res, next) => {
    const { JWT_SECRET } = process.env;
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token not found' });
    try {
    jwt.verify(token, JWT_SECRET);
        
    return next();
} catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
}
};
  module.exports = { 
    displayNameValidation, 
    emailValidation, 
    passwordValidation, 
    tokenMid, 
    
};
