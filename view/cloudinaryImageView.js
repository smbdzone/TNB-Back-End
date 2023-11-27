const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dvwkug6jp",
    api_key: "414375748758297",
    api_secret: "oZBJEn94WuLuYllIFCLGicmyx5M"
});

const deleteCloudinaryImage = async (req) => {
    try {
        const { imageUrl } = req.body;

        const publicId = imageUrl.split('/').pop().split('.')[0];
        const image = await cloudinary.uploader.destroy(publicId)

        if (image) {
            return { success: true, message: "Data deleted", data: image };
        } else {
            return { success: false, message: "image not found" };
        }

    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

module.exports = {
    deleteCloudinaryImage
};