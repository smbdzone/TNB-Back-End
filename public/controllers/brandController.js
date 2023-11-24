const brandView = require("../view/brandView");

const getProductsOfBrand = async (req, res) => {
  try {
    const { brand } = req.params;

    try {
      const result = await brandView.getProductsOfBrand(brand);

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
  getProductsOfBrand,
};
