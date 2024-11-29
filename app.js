const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const product = require('./router/ProductRoute'); 
// routes for the categories

const provider = require('./router/ProviderRoute');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', product);
// app.use('/categories', category);
app.use('/providers', provider);


const dbURI = 'mongodb+srv://name:password@cluster0.rei7tip.mongodb.net/pms_main?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => 
    {
      app.listen(2031);
      console.log('MongoDB connected...')})
  .catch(err => console.log(err));

