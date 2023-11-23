const mongoose = require("mongoose");

const IrresistibleDealsSchema = mongoose.Schema({
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

const IrresistibleDealsModel = mongoose.model("IrresistibleDeals", IrresistibleDealsSchema);
module.exports = IrresistibleDealsModel;
