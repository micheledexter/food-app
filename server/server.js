const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static('server/public'));

app.listen(PORT, () => console.log('Express listening on port', PORT));