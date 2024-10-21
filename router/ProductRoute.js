const express = require("express");
const router = express.Router();

const {CreateProduct, getproduct} = require("../controller/ProductController");



router.post("/createproduct",  CreateProduct);

router.get("/getproduct/ProductID/:ProductID",  getproduct);

module.exports = router;