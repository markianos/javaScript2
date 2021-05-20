const jwt = require('jsonwebtoken');
require('dotenv').config(); // hämtar in dotenv utan att spara som en const för att komma åt vår .env med SECRET_KEY

const secretKey = process.env.SECRET_KEY

exports.generateToken = user => {
    return jwt.sign({id: user._id}, secretKey, { expiresIn: '1h' })
  }