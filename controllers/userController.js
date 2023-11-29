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

const addToCart = async (req, res) => {
  try {
    try {
      const result = await userView.addToCart(req.body);

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

const removeFromCart = async (req, res) => {
  try {
    try {
      const result = await userView.removeFromCart(req.body);

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

const changeItemQuantity = async (req, res) => {
  try {
    try {
      const result = await userView.changeItemQuantity(req.body);

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

const addToFavorites = async (req, res) => {
  try {
    try {
      const result = await userView.addToFavorites(req.body);

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

const removeFromFavorites = async (req, res) => {
  try {
    try {
      const result = await userView.removeFromFavorites(req.body);

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

const addToSaveLater = async (req, res) => {
  try {
    try {
      const result = await userView.addToSaveLater(req.body);

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

const removeFromSaveLater = async (req, res) => {
  try {
    try {
      const result = await userView.removeFromSaveLater(req.body);

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

const addToRecentlyViewed = async (req, res) => {
  try {
    try {
      const result = await userView.addToRecentlyViewed(req.body);

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

const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await userView.updateUser(id, req.body, { new: true });

      if (result.success) {
          res.status(200).json({ data: result, error: null, message: 'User updated successfully' });
      } else {
          res.status(404).json({ error: 'User not found' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getUserById,
    signin,
    signup,
    addToCart,
    removeFromCart,
    changeItemQuantity,
    addToFavorites,
    removeFromFavorites,
    addToSaveLater,
    removeFromSaveLater,
    addToRecentlyViewed,
    updateUser
};
