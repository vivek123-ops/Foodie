import React from "react";

const OrderPages = () => {
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
