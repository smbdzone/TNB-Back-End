const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  sku: { type: String, unique: true },
  link: String,
});

const imageModel = mongoose.model("image", imageSchema);
module.exports = imageModel;
