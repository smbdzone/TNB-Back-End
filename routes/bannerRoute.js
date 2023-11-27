const express = require("express");
const router = express.Router();
const bannerController = require("../controllers/bannerController");

router.get("/", bannerController.getBanner);
router.get("/:id", bannerController.getBannerById);
router.post("/", bannerController.uploadBanner);
router.delete("/:id", bannerController.deleteBanner);
router.put("/:id", bannerController.updateBanner);

module.exports = router;