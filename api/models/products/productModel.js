// HÄR INNE SKAPAR VI ALLA VÅRA FUNKTIONER 

const mongodb = require('mongoose');
const productSchema = require('./productSchema');
const Product = require('./productSchema'); // vårt Schema med stor inlednande bokstav





// ---------------- GET ALL PRODUCTS 


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




// ---------------- GET PRODUCTS BY ID 

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




// ---------------- CREATE NEW PRODUCT 

exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.name }, (err, result) => { // söker i vår databas efter namn och kollar i body om samma namn finns redan
        if(err) {
            return res.status(500).json(err);
        }
        if(result) { // om vi får ett resultat och produkten redan existerade så...
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'No no no, that was a nad request. The product already exists in this universe, update the product instead'
            })
        }

        const newProduct = new Product ({ // skapar newProduct som är en ny instans av Product och som följer strukteren i vårt productSchema
            name:   req.body.name,      // skapar efter vårt schema och hämtar in från body.name,short osv. 
            short:  req.body.short,
            desc:   req.body.desc,
            price:  req.body.price,
            image:  req.body.image

        }) 

        newProduct.save() // vi gör en save metod och sparar till databasen 
            .then(() => {  // vi kollar så det går bra och skickar en respons på 201 som nedan
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'the new product was created with success'
                })
            })
            .catch(err => { // om vi inte kunde spara till databasen skickar vi felmmeddelande med status på 500 
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err  || 'Something went wrong, the product was not created'
                })
            })

    }) 
}      





// ------------------ UPDATE PRODUCT

exports.updateProduct = (req, res) => {  // funktion för att uppdatera vår produkt
    Product.exists({ _id: req.params.id }, (err, result) => { // söker efter id och jämför med vår id parameter
      if(err) {
        return res.status(400).json({       // om vi får tillbaka ett bad request
          statusCode: 400,
          status: false,
          message: 'No no no, that was a nad request.'
        })
      }
  
      if(result) {  
        Product.updateOne({ _id: req.params.id }, {  // filtrerar och uppdaterar det id som vi sökt efter
          ...req.body,  // vi gör en spread så alla våra delar i objektet hamnar efter varandra 
          modified: Date.now() // eftersom att vi har en modified del så vill vi att info om när den uppdaterades/modifierades skickas med
        })
        .then(() => { // om det är lyckat skickar vi med en 200
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'The product was happy and updated itself successfully'
          })
        })
        .catch((err) => { // en catch om något går fel 
          if(err.code === 11000) { //en dublicate key error 
            return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'A product by that name already exixst and is not willing to share the name',
              err
            })
          }
          res.status(500).json({ // felmeddelande 500 
            statusCode: 500,
            status: false,
            message: 'Failed to update product',
            err
          })
        })
      } 
      else {
        res.status(404).json({
          statusCode: 404,
          status: false,
        message: err || 'Oops, this product does not exist'
        })
      }
    })
  }




// ------------------ DELETE PRODUCT

exports.deleteProduct = (req, res) => { // funktion för att ta bort product

    Product.exists({ _id: req.params.id }, (err, result) => { // söker igenom vår databas efter om produkten med sökt id existerar
      if(err) {         // om vi inte får ett resultat utan ett fel så skickar vi med ett 400
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You managed to make a bad request'
        })
      }
      if(result) {      // om vi får ett resultat
        Product.deleteOne({ _id: req.params.id }) // hittar produkt via id och använder metoden deleteOne
          .then(() => {  
            res.status(200).json({ // om vi lyckas  så skickar vi ett 200 och ett meddelande
              statusCode: 200,
              status: true,
              message: 'Product was sucessfully deleted and is now but a memory in the distant '
            })
          })
          .catch(err => {  // om vi får resultat men något gick fel och vi inte kunde utföra en delete
            res.status(500).json({ // vi skickar ett 500 med meddelande
              statusCode: 500,
              status: false,
              message: 'Failed to delete product, the force is strong with this one ',
              err
            })
          })
      } 
      else {
        res.status(404).json({ // om vi inte får tillbaka en produkt dvs. fins ej så skickar vi en 404 med meddelande
          statusCode: 404,
          status: false,
          message: err || 'Oooh nooo, this product does not exist'
        })
      }
    })
  }
  