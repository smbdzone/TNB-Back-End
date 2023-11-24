const mongoose = require("mongoose");
const mongooseUrl =
  "mongodb+srv://tableandbeyond:8jM46gfHVz9TzJf4@tableandbeyond.v3zb5e9.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongooseUrl, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connection Successful");
});

db.on("error", (error) => {
  console.log("MongoDB has an error:", error);
});

module.exports = mongoose;
