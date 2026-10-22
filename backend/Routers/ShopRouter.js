const express = require("express");
const shop = express.Router();
const shopController = require("../Controller/ShopController");
const verify = require("../middleware/isLogin");
const checkAuthication = require("../middleware/checkAuthication");
const upload = require("../middleware/multer");

shop.post(
  "/shop/create",
  verify,
  checkAuthication,
  upload.single("shopImage"),
  shopController.createshop,
);
shop.post(
  "/additeam",
  verify,
  checkAuthication,
  upload.single("itemImage"),
  shopController.additeam,
);
shop.get(
  "/shop/my-items",
  verify,
  checkAuthication,
  shopController.getShopItems,
);

shop.put("/shop/item/:id", verify, checkAuthication, shopController.editIteam);
shop.delete(
  "/shop/item/:id",
  verify,
  checkAuthication,
  shopController.deleteIteam,
);
module.exports = shop;
