const Category = require('../models/CategoryModel');


exports.CreateCategory = async(req, res, next) => {
const {ID, name, parentCategoryID} = req.body;
const createdCategory = await Category.create({
name: createdCategory.name, 
parentCategoryID: createdCategory.parentCategoryID, 
ID: createdCategory.ID, 
});
await createdCategory.save();
//		Insert Data
res.json(createdCategory)




}

exports.GetCategory = async(req, res, next) => {
const {ID} = req.params;
const var_Category_List = await Category.findById(ID,'name ID parentCategoryID ');
res.json({'Category_List': var_Category_List,});



}




