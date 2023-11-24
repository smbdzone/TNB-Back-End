const productModel = require("../models/product");

const getProduct = async (id) => {
  try {
    const product = await productModel.findById(id);

    if (!product) {
      return { success: false, message: "Product not found" };
    }

    return { success: true, message: "Data retrieved", data: product };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const getProducts = async () => {
  try {
    const product = await productModel.find({});

    if (!product) {
      return { success: false, message: "Product not found" };
    }

    return { success: true, message: "Data retrieved", data: product };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

module.exports = {
  getProduct,
  getProducts
};
