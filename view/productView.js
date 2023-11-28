const productModel = require("../models/product");

const getProduct = async (req) => {
  try {
    if (req.query.page && req.query.limit) {
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);
      const skip = (page - 1) * limit;
      const sort = { createdAt: -1 };
      const products = await productModel.find().sort(sort).skip(skip).limit(limit);
      const totalCount = await productModel.countDocuments();
      return { success: true, message: "Data retrieved", data: { products, totalCount } };
    }
    const products = await productModel.find()
    return { success: true, message: "Data retrieved", data: { products } };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};


const getProductById = async (id) => {
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

const postProduct = async (data) => {
  try {
    const product = await productModel.create(data);
    return { success: true, message: "Data saved", data: product };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const getByArray = async (data) => {
  try {
    const products = await productModel.find({ _id: { $in: data } });
    return { success: true, message: "Data saved", data: products };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error Saving Data" };
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await productModel.findByIdAndDelete(id);
    if (product) {
      return { success: true, message: "Data deleted", data: product };
    } else {
      return { success: false, message: "product not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error deleting data" };
  }
};

const updateProduct = async (id, data) => {
  try {
    const product = await productModel.findByIdAndUpdate(id, data, { new: true });
    if (product) {
      return { success: true, message: "Data updated", data: product };
    } else {
      return { success: false, message: "product not found" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating data" };
  }
};

module.exports = {
  getProduct, 
  getProductById, 
  postProduct,
  deleteProduct,
  updateProduct,
  getByArray,
};
