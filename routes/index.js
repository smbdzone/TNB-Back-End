const express = require("express");
const router = express.Router();
const bulkRoute = require("./bulkRoute.js");
const productRoute = require("./productRoute.js");
const categoryRoute = require("./categoryRoute.js");
const brandRoute = require("./brandRoute.js");
const bannerRoute = require("./bannerRoute.js");
const dealsRoute = require("./dealsRoute.js");
const giftVoucherRoute = require("./giftVoucherRoute.js");
const menuRoute = require("./menuRoute.js");
const userRoute = require("./userRoute.js");
const inspirationRoute = require("./inspirationRoute.js");
const productDetailExplorerRoute = require("./productDetailExplorerRoute.js");
const giftRegistryRoute = require("./giftRegistryRoute.js");
const cloudinaryImageRoute = require("./cloudinaryImageRoute.js");
const tableTalkRoute = require("./tableTalkRoute.js");
const voucherRoute = require("./voucherRoute.js");

router.use("/delete-cloudinary-image", cloudinaryImageRoute);
router.use("/bulk_upload", bulkRoute);
router.use("/banner", bannerRoute);
router.use("/gift-voucher", giftVoucherRoute);
router.use("/irresistible-deals", dealsRoute);
router.use("/inspiration", inspirationRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/brand", brandRoute);
router.use("/menu", menuRoute);
router.use("/tableTalk", tableTalkRoute);
router.use("/productDetailExplorer", productDetailExplorerRoute);
router.use("/user", userRoute);
router.use("/product-inspiration", inspirationRoute);
router.use("/voucher", voucherRoute);
router.use("/giftRegistry", giftRegistryRoute);

module.exports = router;