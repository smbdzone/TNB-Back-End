const express = require("express");
const router = express.Router();
const irresistibleDealsController = require("../controllers/irresistibleDealsController");

router.get("/", irresistibleDealsController.getIrresistibleDeals);
router.post("/", irresistibleDealsController.uploadIrresistibleDeals);
router.delete("/:id", irresistibleDealsController.deleteIrresistibleDeals);
router.put("/:id", irresistibleDealsController.updateIrresistibleDeals);

module.exports = router;