const voucherModel = require("../models/voucher");

const getVoucher = async () => {
    try {
        const voucher = await voucherModel.find();
        return { success: true, message: "Data retrieved", data: voucher };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const getVoucherById = async (id) => {
    try {
        const voucher = await voucherModel.findById(id);
        return { success: true, message: "Data retrieved", data: voucher };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const createVoucher = async (data) => {
    try {
        const voucher = await voucherModel.create(data);
        return { success: true, message: "Data saved", data: voucher };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error Saving Data" };
    }
};

const deleteVoucher = async (id) => {
    try {
        const voucher = await voucherModel.findByIdAndDelete(id);
        if (voucher) {
            return { success: true, message: "Data deleted", data: voucher };
        } else {
            return { success: false, message: "voucher not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error deleting data" };
    }
};

const updateVoucher = async (id, data) => {
    try {
        const voucher = await voucherModel.findByIdAndUpdate(id, data, { new: true });
        if (voucher) {
            return { success: true, message: "Data updated", data: voucher };
        } else {
            return { success: false, message: "voucher not found" };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: "Error updating data" };
    }
};


module.exports = {
    getVoucher,
    getVoucherById,
    createVoucher,
    deleteVoucher,
    updateVoucher,
};
