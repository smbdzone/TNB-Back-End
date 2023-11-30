const giftRegistryView = require("../view/giftRegistryView");

const getUserGiftRegistry = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await giftRegistryView.getUserGiftRegistry(id);
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

const addProduct = async (req, res) => {
    
    try {
        const result = await giftRegistryView.updateInspiration(req.body.id, req.body.product);
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

const postUserGiftRegistry = async (req, res) => {
    try {
        const result = await giftRegistryView.postUserGiftRegistry(req.body);
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
    getUserGiftRegistry,
    postUserGiftRegistry,
    addProduct
};