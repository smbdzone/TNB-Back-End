const express = require("express");
const router = express.Router();
const productDetailExplorerController = require("../controllers/productDetailExplorerController");

router.get("/", productDetailExplorerController.getProductDetailExplorer);
router.post("/", productDetailExplorerController.createProductDetailExplorer);
router.put("/:id", productDetailExplorerController.updateProductDetailExplorer);

module.exports = router;