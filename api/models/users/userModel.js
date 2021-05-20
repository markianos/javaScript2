const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');

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