const dealsView = require("../view/dealsView");

const getDeals = async (req, res) => {
    try {
        const result = await dealsView.getDeals();
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

const getDealsById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await dealsView.getDealsById(id);
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

const uploadDeals = async (req, res) => {
    try {
        const result = await dealsView.postDeals(req.body);

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

const deleteDeals = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await dealsView.deleteDeals(id);

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

const updateDeals = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await dealsView.updateDeals(id, req.body);

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
    getDeals,
    getDealsById,
    uploadDeals,
    deleteDeals,
    updateDeals,
};
