const express = require("express");
const router = express.Router();
const bulkRoute = require("./bulkRoute.js");
const productRoute = require("./productRoute.js");
const categoryRoute = require("./categoryRoute.js");
const brandRoute = require("./brandRoute.js");
const bannerRoute = require("./bannerRoute.js");
// const irresistibleDealsRoute = require("./IrresistibleDealsRoute.js");

router.use("/bulk_upload", bulkRoute);
router.use("/banner", bannerRoute);
// router.use("/irresistible-deals", irresistibleDealsRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/brand", brandRoute);
router.use("/menu", menuRoute);

module.exports = router;