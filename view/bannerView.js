const bannerModel = require("../models/banner");

const getBanner = async () => {
    try {
        const banner = await bannerModel.find();
        return { success: true, message: "Data retrieved", data: banner };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const postBanner = async (data) => {
    try {
        const banner = await bannerModel.create(data);
        return { success: true, message: "Data saved", data: banner };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const deleteBanner = async (id) => {
    try {
        const banner = await bannerModel.findByIdAndDelete(id);
        if (banner) {
            return { success: true, message: "Data deleted", data: banner };
        } else {
            return { success: false, message: "Banner not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

module.exports = {
    getBanner,
    postBanner,
    deleteBanner,
};
