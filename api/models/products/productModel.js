// HÄR INNE SKAPAR VI ALLA VÅRA FUNKTIONER 

const mongodb = require('mongoose');
const productSchema = require('./productSchema');
const Product = require('./productSchema'); // vårt Schema med stor inlednande bokstav

exports.getProducts = (req, res) => {  // en funktion som hämtar alla våra produkter med ett request och respons
    Product.find({}, (err, data) => {  // här lämnar vi option tom och får tillbaka alla
         if(err) {                      // om fel så skickar vi respons med status på 500 som json
            return res.status(500).json({
             statusCode: 500,           // vår statuskod
             status: false,             
             message: err.message || 'Ohnoo... something appears to be broken. Couldn not fetch the products' // skickar err.message eller vårt meddelande
            })
     } 

     res.status(200).json(data); // om inget err så skickas res på 200

 })
}

exports.getProduct = (req, res) => { 
    Product.exists({ _id: req.params.id }, (err, result) => {  //söker efter _id i mongodb och filtrerar efter den request vi sökt på och om den existerar
        if(err) {       // en if sats som plockar upp att det inte gick att genomföra hämtningen/funktionen / anändaren gjorde något fel
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Oops you made a bad request'  
            })
        }

        if(result) {    // om vi får ett resultat oavsett om det är true eller false så..
            Product.findById(req.params.id) // använder sig av findById som söker efter id och inte skapar en array går även använda findOne och söka efter något annat än id
              .then(product => res.status(200).json(product)) // vi får tillbaka vår produkt på ett respons på 200
              .catch(err => res.status(500).json({  // om error uppstår skickas 500 tillbaka med err.message ex. serverfel
                statusCode: 500,
                status: false,
                message: err.message
              }))
          } else {      // annars om produkt inte existerar skickas en 404 med err medelande eller vårt meddelande
            res.status(404).json({
              statusCode: 404,
              status: false,
              message: err || 'Oops, this products does not exist' // felmeddelande
            })
          }
        })
      }
      