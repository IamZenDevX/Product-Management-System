const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
{
categoryID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: Category",
},
name: {
type: String, 
},
price: {
type: Number, 
},
qTags: [{
type: String, 
}],
providerID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: Provider",
},
launchDate: {
type: Date, 
},
stock: {
type: Number, 
},
status: {
type: String, 
},
},
);





module.exports = mongoose.model("Product", ProductSchema);
