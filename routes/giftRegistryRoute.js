const express = require("express");
const router = express.Router();
const giftRegistryController = require("../controllers/giftRegistryController");

router.get("/", giftRegistryController.getGiftRegistryAll);
router.get("/getGiftRegistryById/:id", giftRegistryController.getGiftRegistryById);
router.get("/:id", giftRegistryController.getUserGiftRegistry);
router.post("/", giftRegistryController.postUserGiftRegistry);
router.put("/addProduct", giftRegistryController.addProduct);
router.put("/removeProduct", giftRegistryController.removeProduct);
router.delete("/:id", giftRegistryController.deleteGiftRegistry);

module.exports = router;