const express = require('express'); // hämtar in express
const app = express(); 
const cors = require('cors'); // hämtar in cors


const productController = require('./controllers/productController')
//MIDDLEWARE

app.use(cors()); // använder cors som middleware 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES    
app.use('/api/products', productController);

module.exports = app; // exporterar app som module