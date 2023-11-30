const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  image: String,
  discount: String,
  description: String,
  children: [
    {
      title: String,
      discount: String,
      description: String,
      slug: { type: String, unique: true },
    },
  ],
  brands: [
    {
      title: String,
      discount: String,
      description: String,
      slug: { type: String, unique: true },
    },
  ],
});

const menuModel = mongoose.model("menu", menuSchema);
module.exports = menuModel;
