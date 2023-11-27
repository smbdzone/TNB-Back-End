const express = require("express");
const router = express.Router();
const giftVoucherController = require("../controllers/giftVoucherController");

router.get("/", giftVoucherController.getGiftVoucher);
router.post("/", giftVoucherController.uploadGiftVoucher);
router.put("/:id", giftVoucherController.updateGiftVoucher);

module.exports = router;