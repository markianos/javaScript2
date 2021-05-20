const router = require('express').Router();
const userModel = require('../models/users/userModel');


// FUNkTIONER & ENDPOINTS   

router.post('/register', userModel.registerUser); // enpoint /register och userModel med funktionen registerUser som vi skapade i userModel 
router.post('/login', userModel.loginUser); // endpoint login och vår funktion loginUser för att kunna logga in.

module.exports = router;