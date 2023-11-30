const express = require("express");
const router = express.Router();
const giftRegistryController = require("../controllers/giftRegistryController");

router.get("/:id", giftRegistryController.getUserGiftRegistry);
router.post("/", giftRegistryController.postUserGiftRegistry);
router.put("/addProduct", giftRegistryController.addProduct);

module.exports = router;