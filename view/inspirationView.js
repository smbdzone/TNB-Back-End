const inspirationModel = require("../models/productInspiration");

const getInspiration = async () => {
    try {
        const inspiration = await inspirationModel.find();
        return { success: true, message: "Data retrieved", data: inspiration };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const getInspirationById = async (id) => {
    try {
        const inspiration = await inspirationModel.findById(id);
        return { success: true, message: "Data retrieved", data: inspiration };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const updateInspiration = async (id, data) => {

    try {
        const inspiration = await inspirationModel.findByIdAndUpdate(id, data, { new: true }); 
        if (inspiration) {
            return { success: true, message: "Menu updated", data: inspiration };
        } else {
            return { success: false, message: "Menu not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

const createInspiration = async (data) => {
    try {
        const inspiration = await inspirationModel.create(data);
        return { success: true, message: "Data saved", data: inspiration };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const deleteInspiration = async (id) => {
    try {
        const inspiration = await inspirationModel.findByIdAndDelete(id);
        return { success: true, message: "Data saved", data: inspiration };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};


module.exports = {
    getInspiration,
    getInspirationById,
    updateInspiration,
    createInspiration,
    deleteInspiration
};


