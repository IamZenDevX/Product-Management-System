const express = require("express");
const router = express.Router();

const {CreateCategory, GetCategory} = require("../controller/CategoryController");



router.post("/createcategory",  CreateCategory);

router.get("/getcategory/ID/:ID",  GetCategory);

module.exports = router;