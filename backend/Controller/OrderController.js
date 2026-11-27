const iteam = require("../module/itemModule");
const Order = require("../module/OrderSchema");

const shop = require("../module/ShopModule");
const { populate } = require("../module/UserModule");

const createOrder = async (req, res) => {
  try {
    const { items, deliveryLocation } = req.body;

    // 2. Shopkeeper ke hisaab se groups banao
    const groups = {};

    for (const cartItem of items) {
      const food = await iteam.findById(cartItem.foodId);
      console.log("Food:", food);
      console.log("Food Shop ID:", food?.iteamShop);
      if (!food) {
        return res.status(401).json({
          message: "food is not found",
        });
      }
      const shopId = food.iteamShop.toString();

      if (!groups[shopId]) {
        groups[shopId] = {
          shop: food.iteamShop,
          items: [],
          totalAmount: 0,
        };
      }

      groups[shopId].items.push({
        food: food._id,
        quantity: cartItem.quantity,
        price: Number(food.price),
      });

      groups[shopId].totalAmount +=
        Number(food.price) * Number(cartItem.quantity);
    }

    // 3. Har group ka alag order banao
    const orders = [];

    for (const group of Object.values(groups)) {
      const order = await Order.create({
        user: req.userId,
        shop: group.shop,
        iteamList: group.items,
        totalprice: group.totalAmount,
        address: deliveryLocation,
      });

      orders.push(order);
    }

    // 4. Response bhejo
    res.status(201).json({
      message: "Orders created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
const getMyOrders = async (req, res) => {
  try {
    // JWT middleware se logged-in user ki ID
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Please login first",
      });
    }

    // Apne Order schema ke user-reference field ka naam use karna.
    const orders = await Order.find({
      user: userId,
    })
      .populate("iteamList.food")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    console.error("Get My Orders Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
};

const getshopOrder = async (req, res) => {
  try {
    const Shop = await shop.findOne({
      shopUser: req.userId,
    });

    if (!Shop) {
      return res.status(404).json({
        message: "Shop not found",
      });
    }

    const orders = await Order.find({
      shop: Shop._id,
    })
      .populate("user", "username email phone")
      .populate("iteamList.food")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Your orders",
      orders,
    });
  } catch (error) {
    console.error("Get Shop Orders Error:", error);

    return res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const allowedStatus = [
      "pending",
      "accepted",
      "start preparing",
      "delivery",
      "cancel",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "Invalid order status",
      });
    }

    // Logged-in shopkeeper ki shop find karo
    const Shop = await shop.findOne({
      shopUser: req.userId,
    });

    if (!Shop) {
      return res.status(404).json({
        message: "Shop not found",
      });
    }

    // Sirf apni shop ka order update kar sakta hai
    const order = await Order.findOne({
      _id: orderId,
      shop: Shop._id,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;
    await order.save();

    return res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.log("Update Order Status Error:", error);

    return res.status(500).json({
      message: "Failed to update order status",
    });
  }
};

module.exports = {
  createOrder,
  getshopOrder,
  getMyOrders,
  updateOrderStatus,
};
