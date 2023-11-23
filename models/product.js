const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: { type: String, unique: true },
  mainCategory: [
    {
      name: String,
      sku: String,
    },
  ],
  subCategory: [
    {
      name: String,
      sku: String,
    },
  ],
  filter: [
    {
      name: String,
      sku: String,
    },
  ],
  title: String,
  name: String,
  video: String,
  unit: String,
  color: [String],
  size: [String],
  description: String,
  details: [String],
  brand: {
    name: String,
    sku: String,
  },
  imageReferences: [String],
  remarks: [String],
  unitPrice: String,
  vatAmount: String,
  discount: String,
  priceInclusiveOfVat: String,
  completeTheLook: [String],
  imageTitle: String,
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
