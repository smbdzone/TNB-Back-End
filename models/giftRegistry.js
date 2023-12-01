const mongoose = require("mongoose");

const gitRegistrySchema = mongoose.Schema({
    title: String,
    eventType: String,
    startDate: String,
    endDate: String,
    location: String,
    city: String,
    message: String,
    products: [String],
    from: String,
    fromName: String
});

const gitRegistryModel = mongoose.model("giftRegistry", gitRegistrySchema);
module.exports = gitRegistryModel;
