const cloudinaryImageView = require("../view/cloudinaryImageView");

const deleteCloudinaryImage = async (req, res) => {
    try {
        const result = await cloudinaryImageView.deleteCloudinaryImage(req);

        if (result.success) {
            return res.status(200).json({
                data: result.data,
                error: null,
                message: result.message
            });
        } else {
            return res.status(404).json({
                error: result.error,
                message: "Image not found"
            });
        }
    } catch (viewError) {
        console.error("Error deleting Cloudinary image:", viewError);
        return res.status(500).json({
            error: viewError.message,
            message: "Error deleting image"
        });
    }
};

module.exports = {
    deleteCloudinaryImage
};
