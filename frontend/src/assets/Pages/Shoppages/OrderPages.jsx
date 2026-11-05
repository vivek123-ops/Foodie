import React from "react";
import { Link } from "react-router-dom";

const OrderPages = () => {
  const recentOrders = [
    {
      id: "#FD1001",
      customer: "Rahul Sharma",
      items: "2x Burger, 1x Fries",
      amount: 349,
      status: "Pending",
    },
    {
      id: "#FD1002",
      customer: "Priya Singh",
      items: "1x Pizza, 2x Coke",
      amount: 499,
      status: "Preparing",
    },
    {
      id: "#FD1003",
      customer: "Aman Verma",
      items: "2x Biryani",
      amount: 399,
      status: "Delivered",
    },
    {
      id: "#FD1004",
      customer: "Neha Gupta",
      items: "1x Momos, 1x Burger",
      amount: 279,
      status: "Pending",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Preparing":
        return "bg-blue-100 text-blue-700";
      case "Delivered":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  return (
    <>
      {" "}
      <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
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
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-bold text-gray-800">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.items}
                  </td>

                  <td className="px-6 py-4 font-bold text-gray-800">
                    ₹{order.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-bold ${getStatusStyle(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default OrderPages;
