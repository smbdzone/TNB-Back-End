const giftVoucherModel = require("../models/giftVoucher");

const getVoucher = async () => {
    try {
        const giftVoucher = await giftVoucherModel.find();
        return { success: true, message: "Data retrieved", data: giftVoucher };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const postVoucher = async (data) => {
    try {
        const giftVoucher = await giftVoucherModel.create(data);
        return { success: true, message: "Data saved", data: giftVoucher };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const updateVoucher = async (id, data) => {
    try {
        const giftVoucher = await giftVoucherModel.findByIdAndUpdate(id, data, { new: true });
        if (giftVoucher) {
            return { success: true, message: "Data updated", data: giftVoucher };
        } else {
            return { success: false, message: "giftVoucher not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error updating data" };
    }
};


module.exports = {
    getVoucher,
    postVoucher,
    updateVoucher,
};
