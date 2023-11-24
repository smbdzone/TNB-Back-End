const express = require("express");
const router = express.Router();
const bulkController = require("../controllers/bulkController");

router.post("/", bulkController.uploadData);

module.exports = router;