const mongoose = require("mongoose");

const userModule = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["user", "delivery", "shop"],
    default: "user",
  },
});

const User = mongoose.model("User", userModule);
module.exports = User;
