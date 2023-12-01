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

const signupSendValidation = async (req, res) => {
  try {

    try {
      const result = await userView.signupSendValidation(req.body);

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

const subscribeToNewsletter = async (req, res) => {
  try {


    try {
      const result = await userView.subscribeToNewsletter(req.body);

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

const getAllUsers = async (req, res) => {
  try {
    try {
      const result = await userView.getAllUsers();

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

const getAllNewsLetterUsers = async (req, res) => {
  try {
    try {
      const result = await userView.getAllNewsLetterUsers();

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

  const data = {}
  if (req.body.username !== null && req.body.username !== "" && req.body.username) {
      data.username = req.body.username;
  }
  if (req.body.email !== null && req.body.email !== "" && req.body.email) {
      data.email = req.body.email;
  }
  if (req.body.address !== null && req.body.address !== "" && req.body.address) {
      data.address = req.body.address;
  }
  if (req.body.city !== null && req.body.city !== "" && req.body.city) {
      data.city = req.body.city;
  }
  if (req.body.image !== null && req.body.image !== "" && req.body.image) {
      data.image = req.body.image;
  }
  if (req.body.dateOfBirth !== null && req.body.dateOfBirth !== "" && req.body.dateOfBirth) {
      data.dateOfBirth = req.body.dateOfBirth;
  }

  try {
      const result = await userView.updateUser(id, data, { new: true });

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
    getAllUsers,
    subscribeToNewsletter,
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
    getAllNewsLetterUsers,
    updateUser,
    signupSendValidation
};
