const Shop = require("../module/ShopModule");
const iteam = require("../module/itemModule");
const User = require("../module/UserModule");
const cloudinary = require("../config/cloudnary");

const createshop = async (req, res) => {
  try {
    const checkuser = await User.findById(req.userId);

    if (!checkuser) {
      return res.status(400).json({
        message: "User/token is not verified",
      });
    }

    const { shopName, address } = req.body;

    if (!shopName || !address) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({
        message: "Shop image is required",
      });
    }

    // Check if shop already exists
    const existingShop = await Shop.findOne({
      shopUser: req.userId,
    });

    if (existingShop) {
      return res.status(400).json({
        message: "Shop is already created",
      });
    }

    // Upload image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "shops" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      stream.end(req.file.buffer);
    });

    // Create shop
    const newShop = await Shop.create({
      shopName,
      address,
      shopImage: result.secure_url,
      shopUser: req.userId,
    });

    return res.status(201).json({
      message: "Shop created successfully",
      shop: newShop,
    });
  } catch (error) {
    console.log("Error from createShop:", error);

    return res.status(500).json({
      message: "Error from createShop controller",
      error: error.message,
    });
  }
};

const additeam = async (req, res) => {
  try {
    const { iteamName, price, category } = req.body;
    const shop = await Shop.findOne({ shopUser: req.userId });
    if (!shop) {
      res.status(400).json({
        message: "shop is not found",
      });
    }
    if (!iteamName || !category || !price) {
      return res.status(400).json({
        message: "all feild is required",
      });
    }
    // Upload image to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "food" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      stream.end(req.file.buffer);
    });
    // create a new iteam
    const newiteam = await iteam.create({
      iteamName,
      iteamImage: result.secure_url,
      price,
      iteamShop: req.userId,
      category,
    });
    shop.iteamList.push(newiteam._id);
    await shop.save();
    res.status(201).json({
      message: "add iteam successful",
    });
  } catch (error) {
    res.status(401).json({
      message: "error found in additeam controller",
    });
  }
};

const getShopItems = async (req, res) => {
  try {
    // Logged-in user ki ID
    const userId = req.userId;

    // User ki shop find karo
    const shop = await Shop.findOne({
      shopUser: userId,
    }).populate("iteamList");

    if (!shop) {
      return res.status(404).json({
        success: false,
        message: "Shop not found",
      });
    }

    console.log(shop);

    // Shop ke food items fetch karo
    const items = await iteam.find({
      iteamShop: userId,
    });

    return res.status(200).json({
      success: true,
      message: "Food items fetched successfully",
      items: shop.iteamList,
    });
  } catch (error) {
    console.error("Get shop items error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const editIteam = async (req, res) => {
  try {
    const { id } = req.params;
    const { iteamName, price, category } = req.body;

    const updatedIteam = await iteam.findByIdAndUpdate(
      id,
      {
        iteamName,
        price,
        category,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedIteam) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Food item updated successfully",
      item: updatedIteam,
    });
  } catch (error) {
    console.error("Edit item error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteIteam = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await iteam.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Food item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food item deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createshop,
  additeam,
  getShopItems,
  editIteam,
  deleteIteam,
};
