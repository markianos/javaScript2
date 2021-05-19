const app = require('./app'); // hämtar in app
const mongoose = require('mongoose'); // hämtar in mongoose
require('dotenv').config(); // hämtar in dotenv utan att spara som en const för att komma åt vår .env fil för att simulera miljövariabler

const PORT = process.env.PORT || 8085; // sparar vår port att hämta från vår .env eller från portnr 8085

const serverURI = 'http://localhost' + PORT; // sätter serverURI till localhost + port som vi definerat ovan 
 