const express = require("express");
const order = express.Router();
const orderController = require("../Controller/OrderController");
const isLogin = require("../middleware/isLogin");

order.post("/sumit/order", isLogin, orderController.createOrder);

module.exports = order;
