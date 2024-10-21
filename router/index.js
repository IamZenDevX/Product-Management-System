const express = require("express");
const router = express.Router();

const CategoryRoute = require("./CategoryRoute");
const ProductRoute = require("./ProductRoute");
const ProviderRoute = require("./ProviderRoute");

router.use(CategoryRoute);
router.use(ProductRoute);
router.use(ProviderRoute);

module.exports = router;
