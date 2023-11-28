const productDetailExplorerView = require("../view/productDetailExplorerView");

const getProductDetailExplorer = async (req, res) => {
    try {
        const result = await productDetailExplorerView.getProductDetailExplorer();
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

const updateProductDetailExplorer = async (req, res) => {
    const { id } = req.params;
    const data = {}
    if (req.body.title !== null) {
        data.title = req.body.title;
    }
    if (req.body.desc !== null) {
        data.desc = req.body.desc;
    }
    if (req.body.image !== null) {
        data.image = req.body.image;
    }
    if (req.body.link !== null) {
        data.link = req.body.link;
    }
    
    try {
        const result = await productDetailExplorerView.updateProductDetailExplorer(id, data);
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

const createProductDetailExplorer = async (req, res) => {
    try {
        
        const result = await productDetailExplorerView.createProductDetailExplorer(req.body);

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
    getProductDetailExplorer,
    createProductDetailExplorer,
    updateProductDetailExplorer,
};
