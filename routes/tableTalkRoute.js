const express = require("express");
const router = express.Router();
const tableTalk = require("../controllers/tableTalk");

router.get("/", tableTalk.getBlog);
router.post("/", tableTalk.postBlog);
router.put("/:id", tableTalk.updateBlog);
router.delete("/:id", tableTalk.deleteBlog);
router.get("/:slug", tableTalk.getBlogBySlug);

module.exports = router;
