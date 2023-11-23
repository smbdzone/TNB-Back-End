const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

router.get("/:brand", brandController.getProductsOfBrand);

module.exports = router;