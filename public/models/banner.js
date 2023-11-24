const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
    pcImage: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const bannerModel = mongoose.model("banner", bannerSchema);
module.exports = bannerModel;
