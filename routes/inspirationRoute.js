const express = require("express");
const router = express.Router();
const inspirationController = require("../controllers/inspirationController");

router.get("/", inspirationController.getInspiration);
router.post("/", inspirationController.createInspiration);
router.put("/", inspirationController.updateInspiration);
router.put("/", inspirationController.deleteInspiration);

module.exports = router;