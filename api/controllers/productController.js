const router = require('express').Router(); // hämtar express med Router()
const productModel = require('../models/products/productModel');
const auth = require('../authentication/auth'); 

// FUNkTIONER & ENDPOINTS    

router.get('/', productModel.getProducts); // när vi gör en GET så vill vi köra productModel med funktionen getProducts
router.get('/:id', productModel.getProduct); // en get mot endpoint med ID genom vår funktion getProduct som vi skapade i productModel

router.post('/new', auth.verifyToken, productModel.createProduct); // Skapar vår post till endpoint /new genom att peka på productModel och funktionen createProduct vi skapade där

router.patch('/:id', auth.verifyToken, productModel.updateProduct); // uppdaterar existerande produkter genom patch och vår updateProduct funktion

router.delete('/:id', auth.verifyToken, productModel.deleteProduct); // Tar bort existerande produkter med delete och vår deleteProduct funktion
//router.delete('/:id', auth.verifyToken, productModel.deleteProduct); // Tar bort existerande produkter med delete och vår deleteProduct funktion

module.exports = router; // exporterar router 