const userModel = require("../models/user");

const getUserById = async (id) => {
  try {
    const user = await userModel.findById(id);

    if (!user) {
      return { success: false, message: "No User found" };
    }

    return { success: true, message: "Data retrieved", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

const getAllUsers = async () => {
  try {
    
    const users = await userModel.find({ subscribeToNewsletter: false });

    if (!users) {
      return { success: false, message: "No User found" };
    }

    return { success: true, message: "Data retrieved", data: users };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

const getAllNewsLetterUsers = async () => {
  try {
    const newsletterUsers = await userModel.find({ subscribeToNewsletter: true });

    if (!newsletterUsers) {
      return { success: false, message: "No User found" };
    }

    return { success: true, message: "Data retrieved", data: newsletterUsers };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

const signin = async (data) => {
  try {
    const user = await userModel.findOne({ email: data.email });

    if (!user) {
      return { success: false, message: "No users found" };
    }

    if (data.accountType !== "google") {
      if (user.password === data.password) {
        return { success: true, message: "Success Login", data: user };
      } else {
        return { success: false, message: "Wrong credentials" };
      }
    }

    return { success: true, message: "Success Login", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

const signup = async (data) => {
  try {
    const userEmail = data.email;

    // Check if a user with the provided email already exists
    const existingUser = await userModel.findOne({ email: userEmail });

    
    if (existingUser) {
      const updatedUser = await userModel.findOneAndUpdate(
        { email: userEmail },
        { $set: { ...data } },
        { new: true }
      );
      return { success: true, message: "Email already in use", data: updatedUser };
    } else {
      // If the user doesn't exist, create a new user
      const newUser = await userModel.create(data);
      return { success: true, message: "User created", data: newUser };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error creating user" };
  }
};

const subscribeToNewsletter = async (data) => {
  try {
    const userEmail = data.email;
    
    // Try to find a user with the provided email
    const existingUser = await userModel.findOne({ email: userEmail });

    // If the user exists, update the subscribeToNewsletter field to true
    if (existingUser) {
      const updatedUser = await userModel.findOneAndUpdate(
        { email: userEmail },
        { $set: { subscribeToNewsletter: true } },
        { new: true }
      );

      return { success: true, message: "User updated", data: updatedUser };
    } else {
      // If the user doesn't exist, create a new user with subscribeToNewsletter set to true
      const newUser = await userModel.create({ ...data, subscribeToNewsletter: true });

      return { success: true, message: "New user created", data: newUser };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error updating/creating user" };
  }
};

const addToCart = async (data) => {
  try {
    const { userId, productId, quantity } = data;
    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    const existingCartItemIndex = user.cartItems.findIndex(
      (item) => item.item === productId
    );

    if (existingCartItemIndex !== -1) {
      user.cartItems[existingCartItemIndex].quantity += quantity;
    } else {
      user.cartItems.push({ item: productId, quantity });
    }

    await user.save();

    return { success: true, message: "Item added to the cart", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error adding item to the cart" };
  }
};

const removeFromCart = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Remove the item from the cart
    user.cartItems = user.cartItems.filter(item => item.item !== productId);

    await user.save();

    return { success: true, message: "Item removed from the cart", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error removing item from the cart" };
  }
};

const changeItemQuantity = async (data) => {
  try {
    const { userId, productId, quantity } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Find the item in the cart and update the quantity
    const cartItem = user.cartItems.find(item => item.item === productId);

    if (cartItem) {
      cartItem.quantity = quantity;
      await user.save();
      return { success: true, message: "Item quantity changed", data: user };
    } else {
      return { success: false, message: "Item not found in the cart" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error changing item quantity" };
  }
};

const addToFavorites = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Add the product to the favorites if it's not already there
    if (!user.favorites.includes(productId)) {
      user.favorites.push(productId);
      await user.save();
      return { success: true, message: "Item added to favorites", data: user };
    } else {
      return { success: false, message: "Item is already in favorites" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error adding item to favorites" };
  }
};

const removeFromFavorites = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Remove the product from favorites
    user.favorites = user.favorites.filter(item => item !== productId);

    await user.save();

    return { success: true, message: "Item removed from favorites", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error removing item from favorites" };
  }
};

const addToSaveLater = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Add the product to save for later if it's not already there
    if (!user.saveForLater.includes(productId)) {
      user.saveForLater.push(productId);
      user.cartItems.filter(item => item.item !== productId);
      await user.save();
      return { success: true, message: "Item added to save for later", data: user };
    } else {
      return { success: false, message: "Item is already in save for later" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error adding item to save for later" };
  }
};

const removeFromSaveLater = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    // Remove the product from save for later
    user.saveForLater = user.saveForLater.filter(item => item !== productId);
    user.cartItems.push({item : productId , quantity: 1});

    await user.save();

    return { success: true, message: "Item removed from save for later", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error removing item from save for later" };
  }
};

const addToRecentlyViewed = async (data) => {
  try {
    const { userId, productId } = data;

    const user = await userModel.findById(userId);

    if (!user) {
      return { success: false, message: "User not found" };
    }

    const index = user.recentlyViewed.indexOf(productId);

    if (index !== -1) {
      user.recentlyViewed.splice(index, 1);
    } else if (user.recentlyViewed.length >= 10) {
      user.recentlyViewed.pop();
    }

    user.recentlyViewed.unshift(productId);

    await user.save();

    return { success: true, message: "Product added to recently viewed", data: user };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error adding product to recently viewed" };
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
  getAllUsers,
  getAllNewsLetterUsers,
  subscribeToNewsletter
};
