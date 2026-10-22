const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  iteamList: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "iteam",
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "shop",
  },
  status: {
    enum: ["panding", "start preparing", "delivery", "cancel"],
    default: "panding",
  },
  totalprice: {
    type: String,
  },
  address: {
    type: String,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
