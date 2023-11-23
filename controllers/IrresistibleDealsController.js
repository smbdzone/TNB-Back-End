const irresistibleDealsView = require("../view/irresistibleDealsView");

const getIrresistibleDeals = async (req, res) => {
    try {
        const result = await irresistibleDealsView.getIrresistibleDeals();
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

const uploadIrresistibleDeals = async (req, res) => {
    try {
        const result = await irresistibleDealsView.postIrresistibleDeals(req.body);

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

const deleteIrresistibleDeals = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await irresistibleDealsView.deleteIrresistibleDeals(id);

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

const updateIrresistibleDeals = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await irresistibleDealsView.updateIrresistibleDeals(id, req.body);

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
    getIrresistibleDeals,
    uploadIrresistibleDeals,
    deleteIrresistibleDeals,
    updateIrresistibleDeals,
};
