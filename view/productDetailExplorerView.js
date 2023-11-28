const productDetailExplorerModel = require("../models/productDetailExplorer");

const getProductDetailExplorer = async () => {
    try {
        const productDetailExplorer = await productDetailExplorerModel.find();
        return { success: true, message: "Data retrieved", data: productDetailExplorer };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const updateProductDetailExplorer = async (id, data) => {

    try {
        const productDetailExplorer = await productDetailExplorerModel.findByIdAndUpdate(id, data, { new: true }); 
        if (productDetailExplorer) {
            return { success: true, message: "productDetailExplorer updated", data: productDetailExplorer };
        } else {
            return { success: false, message: "productDetailExplorer not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

const createProductDetailExplorer = async (data) => {
    try {
        const deals = await productDetailExplorerModel.create(data);
        return { success: true, message: "Data saved", data: deals };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

module.exports = {
    getProductDetailExplorer,
    createProductDetailExplorer,
    updateProductDetailExplorer,
};


