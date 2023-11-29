const mongoose = require("mongoose");
const mongooseUrl =
  "mongodb://tableandbeyond:8jM46gfHVz9TzJf4@ac-yjxjmb1-shard-00-00.v3zb5e9.mongodb.net:27017,ac-yjxjmb1-shard-00-01.v3zb5e9.mongodb.net:27017,ac-yjxjmb1-shard-00-02.v3zb5e9.mongodb.net:27017/?ssl=true&replicaSet=atlas-27f3zf-shard-0&authSource=admin&retryWrites=true&w=majority ";
  // mongodb://tableandbeyond:8jM46gfHVz9TzJf4@ac-yjxjmb1-shard-00-00.v3zb5e9.mongodb.net:27017,ac-yjxjmb1-shard-00-01.v3zb5e9.mongodb.net:27017,ac-yjxjmb1-shard-00-02.v3zb5e9.mongodb.net:27017/?ssl=true&replicaSet=atlas-27f3zf-shard-0&authSource=admin&retryWrites=true&w=majority 

mongoose.connect(mongooseUrl, {});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB Connection Successful");
});

db.on("error", (error) => {
  console.log("MongoDB has an error:", error);
});

module.exports = mongoose;
