const router = require('express').Router();
const userModel = require('../models/users/userModel');


// FUNkTIONER & ENDPOINTS   

router.post('/register', userModel.registerUser); // enpoint /register och userModel med funktionen registerUser som vi skapade i userModel 

module.exports = router;