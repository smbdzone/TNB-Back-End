const menuModel = require("../models/menu");

const getMenu = async () => {
    try {
        console.log("Finding")
        const menu = await menuModel.find();
        console.log(menu)
        return { success: true, message: "Data retrieved", data: menu };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const updateMenu = async (id, data) => {

    try {
        const deals = await menuModel.findByIdAndUpdate(id, data, { new: true });  // may be update this thing
        if (deals) {
            return { success: true, message: "Menu updated", data: deals };
        } else {
            return { success: false, message: "Menu not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

const createMenu = async (data) => {
    try {
        const deals = await menuModel.create(data);
        return { success: true, message: "Data saved", data: deals };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

module.exports = {
    getMenu,
    updateMenu,
    createMenu
};

