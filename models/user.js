const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true , require: true },
  password: String,
  accountType: String,
  cartItems: [
    {
      item: String,
      quantity: Number,
    },
  ],
  favorites: [String],
  recentlyViewed: [String],
  saveForLater: [String],
  image: String,
  username: String,
  phone: String,
  address: String,
  city: String,
  giftRegistry: [String],
  orders: [String],
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
