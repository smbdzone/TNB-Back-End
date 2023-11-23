const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/bannerController");

router.get("/", bannerController.getBanner);
router.post("/", bannerController.uploadBanner);
router.delete("/:id", bannerController.deleteBanner);

module.exports = router;