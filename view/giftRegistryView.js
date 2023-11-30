const dealsModel = require("../models/deals");

const getUserGiftRegistry = async (id) => {
    try {
        const deals = await dealsModel.findById(id);
        return { success: true, message: "Data retrieved", data: deals };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const postUserGiftRegistry = async (data) => {
    try {
        const deals = await dealsModel.create(data);
        return { success: true, message: "Data saved", data: deals };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const addProduct = async (id, data) => {
    try {
        const deals = await dealsModel.findByIdAndUpdate(id, data, { new: true });
        if (deals) {
            return { success: true, message: "Data deleted", data: deals };
        } else {
            return { success: false, message: " Deals not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

module.exports = {
    getUserGiftRegistry,
    postUserGiftRegistry,
    addProduct
};
