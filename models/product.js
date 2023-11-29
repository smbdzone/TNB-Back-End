const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  sku: { type: String, unique: true },
  title: String,
  name: String,
  status: String,
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
  brand: {
    name: String,
    sku: String,
  },
  unitPrice: String,
  vatAmount: String,
  priceInclusiveOfVat: String,
  discount: String,
  badge: String,
  refundable: String,
  completeTheLook: [String],
  details: [String],
  remarks: [String],
  color: [String],
  size: [String],
  lines: [String],
  overview: String,
  description: String,
  meta_title: String,
  meta_description: String,
  imageTitle: String,
  imageReferences: [String],
  video: String,
  unit: String,
  filter: [
    {
      name: String,
      sku: String,
    },
  ],
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
