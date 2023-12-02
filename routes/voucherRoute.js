const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/voucherController");

router.get("/user/:id", voucherController.getVoucherByUserId);
router.get("/:id", voucherController.getVoucherById);
router.get("/", voucherController.getVoucher);
router.post("/", voucherController.createVoucher);
router.put("/:id", voucherController.updateVoucher);
router.delete("/:id", voucherController.deleteVoucher);

module.exports = router;