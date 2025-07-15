const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  adminSecretCode: process.env.ADMIN_SECRET_CODE,
}; 
