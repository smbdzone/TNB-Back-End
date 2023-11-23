const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: { type: String, unique: true },
  mainCategory: [String],
  subCategory: [String],
  filter: [String],
  title: String,
  name: String,
  description: String,
  details: [String],
  brand: String,
  imageReferences: [String],
  remarks: [String],
  unitPrice: String,
  vatAmount: String,
  priceInclusiveOfVat: String,
  completeTheLook: [String],
  imageTitle: String,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
