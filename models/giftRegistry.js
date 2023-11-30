const mongoose = require("mongoose");

const gitRegistrySchema = mongoose.Schema({
    title: String,
    eventType: String,
    startDate: String,
    endDate: String,
    location: String,
    message: String,
    products: [String],
    from: String
});

const gitRegistryModel = mongoose.model("banner", gitRegistrySchema);
module.exports = gitRegistryModel;
