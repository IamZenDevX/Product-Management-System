// const  = require('../models/Model');
const Provider = require('../models/ProviderModel');


exports.CreateProvider = async(req, res, next) => {
const {providerID, name, website, email} = req.body;
//		DB Error
async function catchDBErr(err, res) {
     if (err.name === "MongoError" || err.name === "ValidationError")
        return res.status(400).send({
            status: 400,
            message: err.message
        });
    else {
        // 500: DB connection issues... 
        return res.status(500).send({
            status: 500,
            message: "Oops! Internal server error."
        });
    }
}

const createdProvider = await Provider.create({
email, 
website, 
name, 
});
await createdProvider.save();
//		save record
res.json(createdProvider)

res.json({'createProvider': createdProvider,});



}

exports.deleteProvider = async(req, res, next) => {
const {providerID} = req.params;
const deletedProvider = await Provider.findByIdAndDelete(providerID);
console.log("Record Successfully Deleted !");



}

exports.filterProviders = async(req, res, next) => {
const {name} = req.query;
// const queryObjif (!name  ){
// }
// else {
// }



}

exports.getProvider = async(req, res, next) => {
const {providerID} = req.params;
const var_Provider_List = await Provider.findById(providerID,'website name email ');
//		Select Data
res.json(var_Provider_List)




}

exports.updateProvider = async(req, res, next) => {
const {email, name, website} = req.body;
const {providerID} = req.params;
const updatedProvider = await Provider.findByIdAndUpdate(providerID,
{
name: name,
email: email,
website: website
}
, {new: true} );
//		Update data
res.json(updatedProvider)




}




