const jwt = require('jsonwebtoken');
require('dotenv').config(); // hämtar in dotenv utan att spara som en const för att komma åt vår .env med SECRET_KEY

const secretKey = process.env.SECRET_KEY

exports.generateToken = user => {
    return jwt.sign({id: user._id}, secretKey, { expiresIn: '1h' })
  }


  // MIDDLEWARE
  exports.verifyToken = (req, res, next) => { // en veryfyToken som arrowfunction med en middleware/next

    try {
        const token = req.headers.authorization.split(" ")[1] // Token skickas som Bearer <token> därför använder vi split och sparar vår array på indexplats[1] för att bara få token delen och inte bearer
        req.userData = jwt.verify(token, secretKey) // verifierar vår token och secret key och om vi lyckas så går vi till next annars hoppar vi ur till catch
        next();
    }
    catch {
        return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access restricted, Please try again to get it right'
        })
    }

  }