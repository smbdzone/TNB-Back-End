const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    image: String,
    about: String,
    title: String,
    description: String,
    Content: [String],
    seo: {
        title: String,
        description: String,
        slug: String
    }
});

const blogsModel = mongoose.model("blogs", blogSchema);
module.exports = blogsModel;
