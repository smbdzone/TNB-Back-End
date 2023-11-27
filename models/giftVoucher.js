const mongoose = require("mongoose");

const giftVoucherSchema = mongoose.Schema({
    firstValue: {
        type: Number,
        required: true
    },
    firstImage: {
        type: String,
        required: true
    },
    secondValue: {
        type: Number,
        required: true
    },
    secondImage: {
        type: String,
        required: true
    },
    thirdValue: {
        type: Number,
        required: true
    },
    thirdImage: {
        type: String,
        required: true
    },
});

const giftVoucherModel = mongoose.model("giftVoucher", giftVoucherSchema);
module.exports = giftVoucherModel;
