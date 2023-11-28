const productView = require("../view/productView");

const getProduct = async (req, res) => {
  try {
    const result = await productView.getProduct(req);

    if (result.success) {
      res.status(200).json({ data: result.data, error: null, message: result.message });
    } else {
      res.status(500).json({ error: result.error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error in retrieving data" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    try {
      const result = await productView.getProductById(id);

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

const postProduct = async (req, res) => {
  try {
    try {
      const result = await productView.postProduct(req.body);

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

const getByArray = async (req, res) => {
  try {
    try {
      const result = await productView.getByArray(req.body.data);

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

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productView.deleteProduct(id);

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
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await productView.updateProduct(id, req.body);
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
};

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
  getByArray,
};
