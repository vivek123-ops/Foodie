const express = require("express");
const verify = require("../middleware/isLogin");
const User = express.Router();
const userController = require("../Controller/UserController");

User.get("/getshop", verify, userController.getshops);
User.get("/getfoods", verify, userController.getAllFood);

module.exports = User;
