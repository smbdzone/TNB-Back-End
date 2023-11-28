const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.get("/", menuController.getMenu);
router.post("/", menuController.createMenu);
router.put("/:id", menuController.updateMenu);
router.post("/:id", menuController.deleteMenu);

module.exports = router;