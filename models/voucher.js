const mongoose = require("mongoose");

const voucherSchema = mongoose.Schema({
    value: String,
    used: { type: Boolean, default: false },
    user: String,
    username: String
});

const voucherModel = mongoose.model("voucher", voucherSchema);
module.exports = voucherModel;
