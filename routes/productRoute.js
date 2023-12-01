const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getProduct);
router.get("/latest", productController.latestProducts);
router.get("/:id", productController.getProductById);
router.post("/searchProducts", productController.searchProducts);
router.post("/getAllSearchProducts", productController.getAllSearchProducts);
router.post("/getByArray", productController.getByArray);
router.post("/", productController.postProduct);
router.post("/addReview", productController.addReview);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;