const express = require('express'); // hämtar in express
const app = express(); 
const cors = require('cors'); // hämtar in cors

// IMPORTERA CONTROLLERS 
const productController = require('./controllers/productController'); // importerar router
const userController = require('./controllers/userController');

//ROUTES / MIDDLEWARE

app.use(cors()); // använder cors som middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//CONTROLLERS FÖR MODELS
app.use('/api/products', productController); // /api/products använder sig av productConroller
app.use('/api/users', userController);


module.exports = app; // exporterar app som module 