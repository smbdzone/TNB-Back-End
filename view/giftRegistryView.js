const gitRegistryModel = require("../models/giftRegistry");

const getGiftRegistryAll = async () => {
  try {
    const deals = await gitRegistryModel.find({});
    return { success: true, message: "Data retrieved", data: deals };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const getGiftRegistryById = async (id) => {
  try {
    const deals = await gitRegistryModel.findById(id);
    return { success: true, message: "Data retrieved", data: deals };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const deleteGiftRegistry = async (id) => {
  try {
    const deletedRegistry = await gitRegistryModel.findByIdAndDelete(id);
    if (deletedRegistry) {
      return { success: true, message: "Gift registry deleted successfully", data: deletedRegistry };
    } else {
      return { success: false, message: "Gift registry not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error deleting gift registry" };
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
  getGiftRegistryAll,
  getUserGiftRegistry,
  postUserGiftRegistry,
  addProduct,
  deleteGiftRegistry,
  removeProduct,
  getGiftRegistryById,
};
