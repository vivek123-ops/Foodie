const iteam = require("../module/itemModule");
const Order = require("../module/OrderSchema");
const { populate } = require("../module/UserModule");

const createOrder = async (req, res) => {
  try {
    const { items, deliveryLocation } = req.body;

    // 2. Shopkeeper ke hisaab se groups banao
    const groups = {};

    for (const cartItem of items) {
      const food = await iteam.findById(cartItem.foodId);
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

    console.log(orders);

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

module.exports = {
  createOrder,
  getMyOrders,
};
