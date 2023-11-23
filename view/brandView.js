const productModel = require("../models/product");

const getProductsOfBrand = async (brand) => {
  try {
    // Use Mongoose's find method to search for products that match the brand
    const products = await productModel.find({ brand });

    // If there are no products found, return an appropriate message
    if (!products) {
      return { success: false, message: "No products found for the brand" };
    }

    // If products are found, return the product data
    return { success: true, message: "Data retrieved", data: products };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

module.exports = {
  getProductsOfBrand,
};
