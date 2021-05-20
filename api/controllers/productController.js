const router = require('express').Router(); // hämtar express med Router()
const productModel = require('../models/products/productModel');

// FUNTIONER & ENDPOINTS    

router.get('/', productModel.getProducts); // när vi gör en GET så vill vi köra productModel med funktionen getProducts
router.get('/:id', productModel.getProduct); // en get mot endpoint med ID genom vår funktion getProduct som vi skapade i productModel

router.post('/new', productModel.createProduct); // Skapar vår post till endpoint /new genom att peka på productModel och funktionen createProduct vi skapade där



module.exports = router; // exporterar router