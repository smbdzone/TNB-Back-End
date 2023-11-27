const express = require("express");
const router = express.Router();
const dealsController = require("../controllers/dealsController");

router.get("/", dealsController.getDeals);
router.get("/:id", dealsController.getDealsById);
router.post("/", dealsController.uploadDeals);
router.delete("/:id", dealsController.deleteDeals);
router.put("/:id", dealsController.updateDeals);

module.exports = router;