const mongoose = require("mongoose");
const shop = require("./ShopModule");

const itemSchema = new mongoose.Schema({
  iteamName: {
    type: String,
    required: true,
  },
  iteamImage: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  iteamShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shop",
  },
  category: {
    type: String,
    enum: ["Pizza", "Burger", "Biryani", "Momos"],
    required: true,
  },
});

const iteam = mongoose.model("iteam", itemSchema);
module.exports = iteam;
