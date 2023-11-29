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
  image: { type: String, default: "https://static.vecteezy.com/system/resources/previews/005/545/335/large_2x/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" },
  username: String,
  phone: String,
  address: String,
  city: String,
  giftRegistry: [String],
  orders: [String],
  subscribeToNewsletter: { type: Boolean, default: false },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
