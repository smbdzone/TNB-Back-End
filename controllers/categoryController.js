const categoryView = require("../view/categoryView");

const getProductsOfCategory = async (req, res) => {
  try {
    const { category } = req.params;

    try {
      const result = await categoryView.getProductsOfCategory(category);

      if (result.success) {
        res
          .status(200)
          .json({ data: result.data, error: null, message: result.message });
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (viewError) {
      res.status(500).json({ error: viewError.message });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in creating data" });
  }
};

module.exports = {
  getProductsOfCategory,
};
