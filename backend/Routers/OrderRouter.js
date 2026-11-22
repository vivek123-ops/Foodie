const express = require("express");
const order = express.Router();
const orderController = require("../Controller/OrderController");
const isLogin = require("../middleware/isLogin");
const checkAuthication = require("../middleware/checkAuthication");

order.post("/sumit/order", isLogin, orderController.createOrder);
order.get("/my-orders", isLogin, orderController.getMyOrders);
order.get(
  "/shop/orders",
  isLogin,
  checkAuthication,
  orderController.getshopOrder,
);

module.exports = order;
