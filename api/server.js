// VÅR LOKALA SERVER FIL SOM KÖR VÅR APP FRÅN VÅR LOCALHOST


const app = require('./app'); // hämtar in app
const mongoose = require('mongoose'); // hämtar in mongoose
require('dotenv').config(); // hämtar in dotenv utan att spara som en const för att komma åt vår .env fil för att simulera miljövariabler



const PORT = process.env.PORT || 8085; // sparar vår port att hämta från vår .env eller från portnr 8085

const serverURI = 'http://localhost:' + PORT; // sätter serverURI till localhost + port som vi definerat ovan 
const mongoURI = process.env.MONGO_URI; // hämtar vår connectionstring från .env som inte laddas upp till github och gör password mm synlig. 

app.listen(PORT, () => console.log('My server is running at: ' + serverURI)); // app lyssnar efter förändringar på PORT som är definierad i .env

mongoose // använder vår mongoose för att koppla upp oss på databasen via vår connection string
    .set('useCreateIndex', true) // sätter useCreateIndex till true
    .connect(mongoURI,{  // connectar till databasen
        useNewUrlParser: true, // skapar nytt config objekt och använder URL parser satt till true för att inte få Deprecation Warning
        useUnifiedTopology: true // för att använda en fully supported typology class
    }, () => console.log('Connected to my DB'));  // console.log med meddelande om att det fungerar 

