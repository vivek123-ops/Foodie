const User = require("../module/UserModule");
const Shop = require("../module/ShopModule");
const iteam = require("../module/itemModule");

const getshops = async (req, res) => {
  try {
    const checkuser = await User.findById(req.userId);
    if (!checkuser) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const shops = await Shop.find();
    res.status(200).json({
      message: "all shop",
      shop: shops,
    });
  } catch (error) {
    res.status(401).json({
      message: "error found in getshop",
    });
  }
};

const getAllFood = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    const items = await iteam.find();

    res.status(200).json({
      success: true,
      message: "All food items fetched successfully",
      items: items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const categorizedFood = async (req, res) => {
  try {
    const { category } = req.body;
    const checkuser = await User.findById(req.userId);
    if (!checkuser) {
      return res.status(400).json({
        message: "user not found",
      });
    }
    const allfoods = await iteam.find({ category });
    res.status(200).json({
      food: allfoods,
    });
  } catch (error) {
    res.status(401).json({
      message: "error found in categorizedFood",
    });
  }
};

module.exports = {
  getshops,
  getAllFood,
};
