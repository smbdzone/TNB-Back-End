const express = require("express");
const router = express.Router();
const cloudinaryImageController = require("../controllers/cloudinaryImageController");

router.post("/", cloudinaryImageController.deleteCloudinaryImage);

module.exports = router;