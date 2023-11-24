const mongoose = require("mongoose");

const productInspirationSchema = mongoose.Schema({
    image: String,
    products: [String],
    dots: [
        { spaceFromTop: String, spaceFromLeft: String, product: String }
    ]
});

const productInspirationModel = mongoose.model("productInspiration", productInspirationSchema);
module.exports = productInspirationModel;
