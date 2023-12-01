const express = require("express");
const router = express.Router();
const voucherController = require("../controllers/voucherController");

router.get("/", voucherController.getVoucher);
router.get("/:id", voucherController.getVoucherById);
router.post("/", voucherController.createVoucher);
router.put("/:id", voucherController.updateVoucher);
router.delete("/:id", voucherController.deleteVoucher);

module.exports = router;