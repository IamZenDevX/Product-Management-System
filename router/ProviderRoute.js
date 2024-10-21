const express = require("express");
const router = express.Router();

const {CreateProvider, deleteProvider, filterProviders, getProvider, updateProvider} = require("../controller/ProviderController");



router.post("/createprovider",  CreateProvider);

router.delete("/deleteprovider/providerID/:providerID",  deleteProvider);

router.post("/filterproviders",  filterProviders);

router.get("/getprovider/providerID/:providerID",  getProvider);

router.put("/updateprovider/providerID/:providerID",  updateProvider);

module.exports = router;