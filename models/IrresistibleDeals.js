const mongoose = require("mongoose");

const IrresistibleDealsSchema = mongoose.Schema({
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

const IrresistibleDealsModel = mongoose.model("IrresistibleDeals", IrresistibleDealsSchema);
module.exports = IrresistibleDealsModel;
