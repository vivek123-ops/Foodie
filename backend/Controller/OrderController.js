const iteam = require("../module/itemModule");
const Order = require("../module/OrderSchema");

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

module.exports = {
  createOrder,
};
