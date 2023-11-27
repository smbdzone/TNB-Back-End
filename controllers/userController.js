const userView = require("../view/userView");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userView.getUserById(id);

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

const signup = async (req, res) => {
  try {

    try {
      const result = await userView.signup(req.body);

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

const signin = async (req, res) => {
  try {
    try {
      const result = await userView.signin(req.body);

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
    getUserById,
    signin,
    signup
};
