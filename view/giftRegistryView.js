const gitRegistryModel = require("../models/giftRegistry");

const getGiftRegistryById = async (id) => {
  try {
    const deals = await gitRegistryModel.findById(id);
    return { success: true, message: "Data retrieved", data: deals };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const getUserGiftRegistry = async (id) => {
  try {
    const registries = await gitRegistryModel.find({ from: id });
    return { success: true, message: "Data retrieved", data: registries };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

const postUserGiftRegistry = async (data) => {
  try {
    const deals = await gitRegistryModel.create(data);
    return { success: true, message: "Data saved", data: deals };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const addProduct = async (id, product) => {
  try {
    const updatedRegistry = await gitRegistryModel.findByIdAndUpdate(
      id,
      { $push: { products: product } },
      { new: true }
    );

    if (updatedRegistry) {
      return {
        success: true,
        message: "Product added to the gift registry",
        data: updatedRegistry,
      };
    } else {
      return { success: false, message: "Gift registry not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating gift registry" };
  }
};

const removeProduct = async (id, productId) => {
    console.log(id , productId)
  try {
    const updatedRegistry = await gitRegistryModel.findByIdAndUpdate(
      id,
      { $pull: { products: productId } },
      { new: true }
    );
    if (updatedRegistry) {
      return {
        success: true,
        message: "Product removed from the gift registry",
        data: updatedRegistry,
      };
    } else {
      return { success: false, message: "Gift registry not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating gift registry" };
  }
};

module.exports = {
  getUserGiftRegistry,
  postUserGiftRegistry,
  addProduct,
  removeProduct,
  getGiftRegistryById,
};
