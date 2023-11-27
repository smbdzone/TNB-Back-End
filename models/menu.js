const mongoose = require("mongoose");

const menuSchema = mongoose.Schema({
  title: String,
  slug: String,
  image: String,
  children: [
    {
      title: String,
      slug: String,
    },
  ],
  brands: [
    {
      title: String,
      slug: String,
    },
  ],
});

const menuModel = mongoose.model("menu", menuSchema);
module.exports = menuModel;
