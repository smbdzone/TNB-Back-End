const express = require("express");
const router = express.Router();
const inspirationController = require("../controllers/inspirationController");

router.get("/", inspirationController.getInspiration);
router.get("/:id", inspirationController.getInspirationById);
router.post("/", inspirationController.createInspiration);
router.put("/:id", inspirationController.updateInspiration);
router.delete("/:id", inspirationController.deleteInspiration);

module.exports = router;