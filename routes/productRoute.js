const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:id", productController.getProduct);
// router.get("/", productController.getProducts); get all products

module.exports = router;