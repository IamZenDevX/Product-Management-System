const Product = require('../models/ProductModel');


exports.CreateProduct = async(req, res, next) => {
const {categoryID, imageURLs, launchDate, name, providerID, price, qTags, status, stock} = req.body;
let createdProduct;
createdProduct = await Product.create({
price, 
providerID, 
stock, 
qTags, 
name, 
launchDate, 
imageURLs, 
status, 
categoryID, 
});
res.json({'CreateProduct': createdProduct});



}

exports.getproduct = async(req, res, next) => {
const {ProductID} = req.params;
let var_Product_List;
 var_Product_List = await Product.findById(ProductID,'categoryID stock status launchDate imageURLs qTags name providerID price ');
res.json({'getproduct': var_Product_List});



}




