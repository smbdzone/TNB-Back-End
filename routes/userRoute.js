const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/:id", userController.getUserById);
router.put("/", userController.signin);
router.post("/", userController.signup);
router.post("/addToCart", userController.addToCart);
router.post("/removeFromCart", userController.removeFromCart);
router.post("/changeItemQuantity", userController.changeItemQuantity);
router.post("/addToFavorites", userController.addToFavorites);
router.post("/removeFromFavorites", userController.removeFromFavorites);
router.post("/addToSaveLater", userController.addToSaveLater);
router.post("/removeFromSaveLater", userController.removeFromSaveLater);
router.post("/addToRecentlyViewed", userController.addToRecentlyViewed);
router.put("/:id", userController.updateUser);
module.exports = router;
