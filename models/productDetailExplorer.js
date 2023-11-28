const mongoose = require("mongoose");

const productDetailExplorerSchema = mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  link: String
});

const productDetailExplorerModel = mongoose.model("productDetailExplorer", productDetailExplorerSchema);
module.exports = productDetailExplorerModel;
