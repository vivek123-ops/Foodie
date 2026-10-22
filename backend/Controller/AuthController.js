const User = require("../module/UserModule");
const express = require("express");
const bcrypt = require("bcrypt");
const generatetoken = require("../config/Token");
const Shop = require("../module/ShopModule");

const signup = async (req, res) => {
  try {
    const { username, password, userType, email } = req.body;
    if (!username || !password || !userType || !email) {
      return res.status(200).json({
        message: "all feild is required",
      });
    }
    let user = await User.findOne({ email });
    // check user
    if (user) {
      if (user.userType == userType) {
        return res.status(400).json({
          message: "user already found ",
        });
      }
    }
    // check all feild
    if (password.length <= 8) {
      return res.status(400).json({
        message: "password atleast greater than 5",
      });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    // generate token

    user = await User.create({
      username,
      password: hashpassword,
      userType,
      email,
    });
    const token = generatetoken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "user create successful",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "error found signup side",
    });
    console.log("error found signup side :", error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    // 1. Validate required fields
    if (!email || !password || !userType) {
      return res.status(400).json({
        success: false,
        message: "Email, password and user type are required",
      });
    }

    // 2. Validate user type
    const allowedTypes = ["user", "shop", "delivery"];

    if (!allowedTypes.includes(userType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user type",
      });
    }

    // 3. Find user
    const user = await User.findOne({
      email: email.trim().toLowerCase(),
      userType: userType,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 4. Verify selected role
    if (user.userType !== userType) {
      return res.status(403).json({
        success: false,
        message: `This account is not registered as ${userType}`,
      });
    }

    // 5. Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    // 6. Generate token
    const token = await generatetoken(user._id);

    // 7. Check shop and delivery profiles
    let hasShop = false;
    let shop = null;

    let hasDeliveryProfile = false;
    let deliveryProfile = null;

    if (user.userType === "shop") {
      shop = await Shop.findOne({
        shopUser: user._id,
      });

      hasShop = Boolean(shop);
    }

    if (user.userType === "delivery") {
      deliveryProfile = await Delivery.findOne({
        deliveryUser: user._id,
      });

      hasDeliveryProfile = Boolean(deliveryProfile);
    }

    // 8. Set authentication cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // 9. Return response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,

      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        userType: user.userType,
      },

      hasShop,
      shop,

      hasDeliveryProfile,
      deliveryProfile,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
    });
  }
};

module.exports = {
  signup,
  login,
};
