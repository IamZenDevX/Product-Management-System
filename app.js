const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

// OAuth Middleware
// const authMiddleware = require('./middlewares/auth');
// routes for the products
const product = require('./router/ProductRoute'); 
// routes for the categories
// const category = require('./routes/category.route'); 
// routes for the providers
const provider = require('./router/ProviderRoute');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// OAuth2.0 middleware
// app.use(authMiddleware);

// Connect to MongoDB Atlas Database


app.use('/products', product);
// app.use('/categories', category);
app.use('/providers', provider);

// const listOfEndpoints = [
//     '/',
//     '/products',
//     '/products/:sku',
//     '/products/:sku/similar',
//     '/categories',
//     '/categories/:categoryID',
//     '/categories/:categoryID/subCategories',
//     '/categories/:categoryID/products',
//     '/providers',
//     '/providers/:providerID',
//     'Search Query Sample: GET /products?limit=10&offset=0&qTags=gaming,mouse&attributes[colors]=white,silver',
//     'Search Query Sample: GET /categories?name=Peripherals',
//     'Search Query Sample: GET /providers?name=Razer'
// ]

// app.get('/', (req, res) => {
//     res.send({ 'endpoints': listOfEndpoints })
// });

// app.get('*', (req, res) => {
//     res.status(404).send({
//         'status': 404,
//         'message': 'Invalid URL',
//         'endpoints': listOfEndpoints
//     })
// });

// app.post('*', (req, res) => {
//     res.status(404).send({
//         'status': 404,
//         'message': 'Invalid URL',
//         'endpoints': listOfEndpoints
//     })
// });

// app.put('*', (req, res) => {
//     res.status(404).send({
//         'status': 404,
//         'message': 'Invalid URL',
//         'endpoints': listOfEndpoints
//     })
// });

// app.delete('*', (req, res) => {
//     res.status(404).send({
//         'status': 404,
//         'message': 'Invalid URL',
//         'endpoints': listOfEndpoints
//     })
// });


const dbURI = 'mongodb+srv://admin01:admin01@cluster0.rei7tip.mongodb.net/pms_main?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
  .then(() => 
    {
      app.listen(2031);
      console.log('MongoDB connected...')})
  .catch(err => console.log(err));

