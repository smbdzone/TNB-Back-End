const giftVoucherView = require("../view/giftVoucherView");

const getGiftVoucher = async (req, res) => {
    try {
        const result = await giftVoucherView.getVoucher();
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

const uploadGiftVoucher = async (req, res) => {
    try {
        const result = await giftVoucherView.postVoucher(req.body);

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

const updateGiftVoucher = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await giftVoucherView.updateVoucher(id, req.body);
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
    getGiftVoucher,
    uploadGiftVoucher,
    updateGiftVoucher,
};
