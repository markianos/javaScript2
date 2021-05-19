const router = require('express').Router(); // hämtar express med Router()
const productModel = require('../models/products/productModel');

// ENDPOINTS & FUNTIONER

router.get('/', productModel.getProducts); // när vi gör en GET så vill vi köra productModel med funktionen getProducts
router.get('/:id', productModel.getProduct)

module.exports = router; // exporterar router