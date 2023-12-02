const voucherView = require("../view/voucherView");

const getVoucher = async (req, res) => {
    try {
        const result = await voucherView.getVoucher();
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

const getVoucherById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    try {
        const result = await voucherView.getVoucherById(id);
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

const getVoucherByUserId = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await voucherView.getVoucherByUserId(id);
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

const createVoucher = async (req, res) => {
    try {
        const result = await voucherView.createVoucher(req.body);

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

const deleteVoucher = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await voucherView.deleteVoucher(id);

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

const updateVoucher = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await voucherView.updateVoucher(id, req.body);
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
    getVoucher,
    getVoucherById,
    createVoucher,
    deleteVoucher,
    updateVoucher,
    getVoucherByUserId
};
