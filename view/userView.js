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
    try {
      const user = await userModel.create(data);
      return { success: true, message: "Data saved", data: user };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Error Saving Data" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error retrieving data" };
  }
};

module.exports = {
  getUserById,
  signin,
  signup,
};
