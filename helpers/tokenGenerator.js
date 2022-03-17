const token = require('jsonwebtoken');
require('dotenv').config();

const tokenConfig = {
    expiresIn: '7d',
};
const SECRET = process.env.JWT_SECRET;
module.exports = (payload = {}) => token.sign({ payload }, SECRET, tokenConfig);
