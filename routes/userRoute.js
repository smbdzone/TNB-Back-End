const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.put("/", userController.signin);
router.get("/getAllUsers", userController.getAllUsers);
router.get("/getAllNewsLetterUsers", userController.getAllNewsLetterUsers);
router.get("/:id", userController.getUserById);
router.post("/addToCart", userController.addToCart);
router.post("/removeFromCart", userController.removeFromCart);
router.post("/changeItemQuantity", userController.changeItemQuantity);
router.post("/addToFavorites", userController.addToFavorites);
router.post("/removeFromFavorites", userController.removeFromFavorites);
router.post("/addToSaveLater", userController.addToSaveLater);
router.post("/removeFromSaveLater", userController.removeFromSaveLater);
router.post("/addToRecentlyViewed", userController.addToRecentlyViewed);
router.post("/subscribeToNewsletter", userController.subscribeToNewsletter);
router.post("/", userController.signup);
module.exports = router;