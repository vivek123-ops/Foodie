import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderPages = () => {
  const [orders, setorders] = useState([]);

  const getorder = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/shop/orders", {
        withCredentials: true,
      });
      setorders(result.data.orders || []);
    } catch (error) {
      console.log("Order fetch error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    getorder();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "accepted":
        return "bg-blue-100 text-blue-700";

      case "start preparing":
        return "bg-orange-100 text-orange-700";

      case "delivery":
        return "bg-purple-100 text-purple-700";

      case "cancel":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const updateStatus = async (orderId, status) => {
    try {
      const result = await axios.put(
        `http://localhost:3000/api/orders/${orderId}/status`,
        { status },
        { withCredentials: true },
      );

      setorders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId
            ? { ...order, status: result.data.order.status }
            : order,
        ),
      );
    } catch (error) {
      console.log("Update Error:", error.response?.data || error.message);
    }
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-extrabold text-gray-900">
            Recent Orders
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Keep track of your latest orders.
          </p>
        </div>

        <Link
          to="/shop/orders"
          className="rounded-lg px-3 py-2 text-sm font-bold text-orange-600 hover:bg-orange-50"
        >
          View All →
        </Link>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  {/* Order ID */}
                  <td className="px-6 py-4 font-bold text-gray-800">
                    #{order._id.slice(-6)}
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {order.user?.username || "Unknown"}
                  </td>

                  {/* Items */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.iteamList?.reduce(
                      (total, item) => total + item.quantity,
                      0,
                    )}{" "}
                    Items
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4 font-bold text-gray-800">
                    ₹{order.totalprice}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                      className={`rounded-lg border-0 px-3 py-2 text-xs font-bold outline-none ${getStatusStyle(
                        order.status,
                      )}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="accepted">Accepted</option>
                      <option value="start preparing">Start Preparing</option>
                      <option value="delivery">Delivery</option>
                      <option value="cancel">Cancel</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderPages;
