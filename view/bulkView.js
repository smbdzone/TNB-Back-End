const productModel = require("../models/product");

const uploadData = async (data) => {
  try {
    data.forEach(async (productData , index) => {
      const product = new productModel(productData);
      await product.save();
    });
    return { success: true, message: "Data Saved Successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

module.exports = {
  uploadData,
};
