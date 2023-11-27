const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");

router.get("/", brandController.getMenu);
router.post("/", brandController.getProductsOfBrand);

module.exports = router;