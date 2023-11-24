const productView = require("../view/productView");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    try {
      const result = await productView.getProduct(id);

      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      // If an error occurs during the view processing, send a 500 status with an error message.
      res.status(500).json({ error: viewError.message });
    }
  } catch (error) {
    console.log(error);
    // If an error occurs outside of the view processing, send a 500 status with a generic error message.
    res.status(500).json({ error: "Error in creating data" });
  }
};

const getLatestProduct = async (req, res) => {
  try {
    try {
      const result = await productView.getLatestProduct();

      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      // If an error occurs during the view processing, send a 500 status with an error message.
      res.status(500).json({ error: viewError.message });
    }
  } catch (error) {
    console.log(error);
    // If an error occurs outside of the view processing, send a 500 status with a generic error message.
    res.status(500).json({ error: "Error in creating data" });
  }
};

const getProducts = async (req, res) => {
  try {
    const { id } = req.params;

    try {
      const result = await productView.getProducts();

      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      // If an error occurs during the view processing, send a 500 status with an error message.
      res.status(500).json({ error: viewError.message });
    }
  } catch (error) {
    console.log(error);
    // If an error occurs outside of the view processing, send a 500 status with a generic error message.
    res.status(500).json({ error: "Error in creating data" });
  }
};

module.exports = {
  getProduct,
  getProducts,
  getLatestProduct
};
