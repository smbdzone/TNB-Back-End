const blogsModel = require('../models/blog');

const getBlog = async () => {
    try {
        const blog = await blogsModel.find();

        if (!blog) {
            return { success: false, message: 'Blog not found' };
        }

        return { success: true, message: 'Data retrieved', data: blog };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error retrieving data' };
    }
};

const postBlog = async (data) => {
    try {
        const blog = await blogsModel.create(data);
        return { success: true, message: 'Blog saved successfully', data: blog };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error saving blog' };
    }
};

const updateBlog = async (id, data) => {
    try {
        const blog = await blogsModel.findByIdAndUpdate(id, data, { new: true });

        if (blog) {
            return { success: true, message: "Data updated", data: blog };
        } else {
            return { success: false, message: "Blog not found" };
        }
    } catch (error) {
        console.error("Error updating data:", error);
        return { success: false, message: "Error updating data" };
    }
};

const deleteBlog = async (id) => {
    try {
        const blog = await blogsModel.findByIdAndDelete(id);
        if (blog) {
            return { success: true, message: 'Data deleted', data: blog };
        } else {
            return { success: false, message: 'Blog not found' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error deleting data' };
    }
};

const getBlogBySlug = async (slug) => {
    try {
        const blog = await blogsModel.findOne({ 'seo.slug': slug });

        if (!blog) {
            return { success: false, message: 'Blog not found' };
        }

        return { success: true, message: 'Data retrieved', data: blog };
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error retrieving data' };
    }
};

module.exports = { getBlog, postBlog, updateBlog, deleteBlog, getBlogBySlug };
