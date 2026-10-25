const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    iteamList: [
      {
        food: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "iteam",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    shop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "shop",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "accepted", "start preparing", "delivery", "cancel"],
      default: "pending",
    },

    totalprice: {
      type: Number,
      required: true,
    },

    address: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
