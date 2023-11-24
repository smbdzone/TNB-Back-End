const productModel = require("../models/product");

const uploadData = async (data) => {
  try {
    console.log("upload started")
    data.forEach(async (productData , index) => {
      console.log(index, " : " ,productData)
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
