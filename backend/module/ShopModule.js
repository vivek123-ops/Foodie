const mongoose = require("mongoose");
const iteam = require("./itemModule");
const user = require("./UserModule");

const shopSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  shopImage: {
    type: String,
  },
  iteamList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "iteam",
    },
  ],
  shopUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const shop = mongoose.model("shop", shopSchema);
module.exports = shop;
