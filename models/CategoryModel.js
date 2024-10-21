const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
parentCategoryID: {
type: Number, 
},
},
);





module.exports = mongoose.model("Category", CategorySchema);
