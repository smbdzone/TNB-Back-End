const bannerView = require("../view/bannerView");

const getBanner = async (req, res) => {
    try {
        const result = await bannerView.getBanner();
        if (result.success) {
            res
                .status(200)
                .json({ data: result.data, error: null, message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (viewError) {
        // If an error occurs during the view processing, send a 500 status with an error message.
        res.status(500).json({ error: viewError.message });
    }
};

const getBannerById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bannerView.getBannerById(id);
        if (result.success) {
            res
                .status(200)
                .json({ data: result.data, error: null, message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (viewError) {
        // If an error occurs during the view processing, send a 500 status with an error message.
        res.status(500).json({ error: viewError.message });
    }
};

const uploadBanner = async (req, res) => {
    try {
        const result = await bannerView.postBanner(req.body);

        if (result.success) {
            res
                .status(200)
                .json({ data: result.data, error: null, message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (viewError) {
        // If an error occurs during the view processing, send a 500 status with an error message.
        res.status(500).json({ error: viewError.message });
    }
};

const deleteBanner = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bannerView.deleteBanner(id);

        if (result.success) {
            res
                .status(200)
                .json({ data: result.data, error: null, message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (viewError) {
        // If an error occurs during the view processing, send a 500 status with an error message.
        res.status(500).json({ error: viewError.message });
    }
};

const updateBanner = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await bannerView.updateBanner(id, req.body);
        if (result.success) {
            res
                .status(200)
                .json({ data: result.data, error: null, message: result.message });
        } else {
            res.status(500).json({ error: result.error });
        }
    } catch (viewError) {
        // If an error occurs during the view processing, send a 500 status with an error message.
        res.status(500).json({ error: viewError.message });
    }
};

module.exports = {
    getBanner,
    getBannerById,
    uploadBanner,
    deleteBanner,
    updateBanner,
};
