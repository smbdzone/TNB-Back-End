const mongoose = require("mongoose");

const dealsSchema = mongoose.Schema({
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

const dealsModel = mongoose.model("deals", dealsSchema);
module.exports = dealsModel;
