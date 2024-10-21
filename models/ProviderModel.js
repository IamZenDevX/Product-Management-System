const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema(
{
name: {
type: String, 
required: true, 
},
website: {
type: String, 
},
email: {
type: String, 
},
},
);





module.exports = mongoose.model("Provider", ProviderSchema);
