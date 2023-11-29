const inspirationView = require("../view/inspirationView");

const getInspiration = async (req, res) => {
    try {
        const result = await inspirationView.getInspiration();
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

const getInspirationById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await inspirationView.getInspirationById(id);
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

const updateInspiration = async (req, res) => {
    const { id } = req.params;
    const data = {}
    if (req.body.title !== null) {
        data.title = req.body.title;
    }
    if (req.body.image !== null) {
        data.image = req.body.image;
    }
    if (req.body.products !== null) {
        data.products = req.body.products;
    }
    if (req.body.dots !== null) {
        data.dots = req.body.dots;
    }
    
    try {
        const result = await inspirationView.updateInspiration(id, data);
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

const createInspiration = async (req, res) => {
    try {
        const result = await inspirationView.createInspiration(req.body);
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

const deleteInspiration = async (req, res) => {
    const { id } = req.params;
    try {
        
        const result = await inspirationView.deleteInspiration(id);

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
    getInspiration,
    getInspirationById,
    updateInspiration,
    createInspiration,
    deleteInspiration
};
