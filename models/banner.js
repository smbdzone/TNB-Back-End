const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema({
    mobileLink: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    desktopLink: {
        type: String,
        required: true
    },
    desktopImage: {
        type: String,
        required: true
    },
});

const bannerModel = mongoose.model("banner", bannerSchema);
module.exports = bannerModel;
