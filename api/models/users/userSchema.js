const mongodb = require('mongoose');

const userSchema = mongodb.Schema({ // vårt schema för hur en användare ska se ut med hashat lösenord

    firstName:    { type: String, required: true },
    lastName:     { type: String, required: true },
    email:        { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  
    created:      { type: Date, default: Date.now },
    modified:     { type: Date, default: Date.now }
  
  })

  module.exports = mongodb.model('User', userSchema); // exporterar som User