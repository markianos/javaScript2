const express = require('express'); // hämtar in express
const app = express(); 
const cors = require('cors'); // hämtar in cors

// IMPORTERA CONTROLLERS 
const productController = require('./controllers/productController') // importerar router
//MIDDLEWARE

app.use(cors()); // använder cors som middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES    
app.use('/api/products', productController); // /api/products använder sig av productConroller

module.exports = app; // exporterar app som module