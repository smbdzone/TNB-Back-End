const menuView = require("../view/menuView");

const getMenu = async (req, res) => {
    try {
        const result = await menuView.getMenu();
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

const updateMenu = async (req, res) => {
    const { id } = req.params;
    const data = {}
    if (req.body.title !== null) {
        data.title = req.body.title;
    }
    if (req.body.slug !== null) {
        data.slug = req.body.slug;
    }
    if (req.body.image !== null) {
        data.image = req.body.image;
    }
    if (req.body.children !== null) {
        data.children = req.body.children;
    }
    if (req.body.brands !== null) {
        data.brands = req.body.brands;
    }
    
    try {
        const result = await menuView.updateMenu(id, data);
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

const createMenu = async (req, res) => {
    try {
        
        const result = await menuView.createMenu(req.body);

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
    getMenu,
    updateMenu,
    createMenu
};
