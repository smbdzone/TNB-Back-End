const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  title: String,
  slug: { type: String, unique: true },
  image: String,
  children: [
    {
      title: String,
      slug: { type: String, unique: true },
    },
  ],
  brands: [
    {
      title: String,
      slug: { type: String, unique: true },
    },
  ],
});

const menuModel = mongoose.model("menu", menuSchema);
module.exports = menuModel;
