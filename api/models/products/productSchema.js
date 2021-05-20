const mongodb = require('mongoose'); // hämtar mongoose

const productSchema = mongodb.Schema({ // ett Schema som talar om hur strukturen för våra proukter ska se ut objekt nedan med name, short, desc, price, image, created, modified.
    name:     { type: String, required: true, unique: true },
    short:    { type: String, required: true },
    desc:     { type: String, required: true },
    price:    { type: Number, required: true },
    image:    { type: String, required: true },
  
    created:  { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
  
  })

 module.exports = mongodb.model('Product', productSchema); // exporterar som en mongodb model innehållande vår product och dessproductSchema