const mongodb = require('mongoose'); // hämtar in mongoose
const User = require('../users/userSchema'); // hämtar in userSchema
const bcrypt = require('bcrypt'); // hämtar in bcrypt
const auth = require('../../authentication/auth'); //hämtar in filen auth

// FUNKTIONER


//--------- REGISTRERA NY USER

exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {
      if(err) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request',
          err
        })
      }  
      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'The email address is taken',
        })
      }  
      const salt = bcrypt.genSaltSync(10); //sparar variabel salt där vi saltar 10ggr
  
      bcrypt.hash(req.body.password, salt, (err, hash) => { // tar in tre argument i vår hash , vårt password, en salt från vår const med samma namn, och vår hash
  
        if(err) { // om fel vid hashning kod 500
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed when encrypting user password',
            err
          })
        }
        const newUser = new User({ //om inte err utan hash så skapar vi new User
          firstName:      req.body.firstName,
          lastName:       req.body.lastName,
          email:          req.body.email,
          passwordHash:   hash // vårt password som är saltat och hashad krypterad och klar
        })
        newUser.save() // newUSer med metoden save()
          .then(() => {
            res.status(201).json({ //skickar med 201 och meddelande
              statusCode: 201,
              status: true, 
              message: 'User was created successfully'
            })
          })
        .catch(err => { //om något går fel skickar vi 500 med meddelande
            res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create user',
            err
            })
          })
      })
    })
  }

  
  //--------- LOGIN USER

exports.loginUser = (req, res) => {

    User.findOne({ email: req.body.email }) // Söker efter email för findOne
      .then(user => {
        if(!user) { // om user inte har email så är den null och finns inte
          return res.status(404).json({ // skickar 404 i json
            statusCode: 404,
            status: false,
            message: 'Incorrect email or password, did you misspell?'
          })
        }
  
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => { //vi använder bcrypt och compare för att jämföra användarens password som skickas  med user passwordHash
        if(err) { // om vi får error skickar vi respons med json på 400
            return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'You made a bad request',
              err
            })
        }
        if(result) { // om det gick bra så skickar vi status på 200 med ett json objekt
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'Authentication was happily successful',
              token: auth.generateToken(user) //  vår token som vi la in i auth.js med jwt och SECRET_KEY som finns i vår .env
            })
        } else {
            res.status(401).json({ // vår request lyckades men stämde inte
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
          })
        }
      })
    })
}
