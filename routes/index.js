const express = require("express");
const router = express.Router();
const bulkRoute = require("./bulkRoute.js");
const productRoute = require("./productRoute.js");
const categoryRoute = require("./categoryRoute.js");
const brandRoute = require("./brandRoute.js");
const bannerRoute = require("./bannerRoute.js");
const dealsRoute = require("./dealsRoute.js");
const menuRoute = require("./menuRoute.js");
const userRoute = require("./userRoute.js");
const cloudinaryImageRoute = require("./cloudinaryImageRoute.js");

router.use("/delete-cloudinary-image", cloudinaryImageRoute);
router.use("/bulk_upload", bulkRoute);
router.use("/banner", bannerRoute);
router.use("/irresistible-deals", dealsRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/brand", brandRoute);
router.use("/menu", menuRoute);
router.use("/user", userRoute);

module.exports = router;