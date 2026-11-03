import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserHeader from "../../../Components/User/UserHeader";

const formatMoney = (value) => {
  const amount = Number(value) || 0;
  return `₹${amount.toLocaleString("en-IN")}`;
};

const formatDate = (date) => {
  if (!date) return "Date unavailable";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Date unavailable";
  }

  return parsedDate.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getStatusStyle = (status) => {
  const styles = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-blue-100 text-blue-800",
    preparing: "bg-orange-100 text-orange-800",
    "out for delivery": "bg-purple-100 text-purple-800",
    delivered: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    styles[String(status || "pending").toLowerCase()] ||
    "bg-gray-100 text-gray-700"
  );
};

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get("http://localhost:3000/api/my-orders", {
        withCredentials: true,
      });

      const fetchedOrders = response.data.orders;

      setOrders(Array.isArray(fetchedOrders) ? fetchedOrders : []);
    } catch (err) {
      console.error("Fetch orders error:", err.response?.data || err.message);

      setError(
        err.response?.data?.message ||
          "Orders load nahi ho paaye. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />

      <main className="px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Page Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-orange-600">
                FOOD DELIVERY
              </p>

              <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>

              <p className="mt-2 text-gray-500">
                Track your orders and view your order history.
              </p>
            </div>

            <Link
              to="/"
              className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Order Food
            </Link>
          </div>

          {/* Loading */}
          {loading && (
            <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />

              <p className="font-medium text-gray-600">
                Loading your orders...
              </p>
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
              <p className="font-semibold text-red-600">{error}</p>

              <button
                onClick={fetchOrders}
                className="mt-4 rounded-lg bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty Orders */}
          {!loading && !error && orders.length === 0 && (
            <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
              <div className="mb-4 text-6xl">🍔</div>

              <h2 className="text-2xl font-bold text-gray-800">
                No orders yet!
              </h2>

              <p className="mt-2 text-gray-500">
                Your delicious food journey starts here.
              </p>

              <Link
                to="/"
                className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Food
              </Link>
            </div>
          )}

          {/* Orders List */}
          {!loading && !error && orders.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  Order History
                </h2>

                <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                  {orders.length} Orders
                </span>
              </div>

              {orders.map((order) => {
                const foodItems = Array.isArray(order.iteamList)
                  ? order.iteamList
                  : [];

                return (
                  <div
                    key={order._id}
                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    {/* Order Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 p-5">
                      <div>
                        <p className="text-sm text-gray-500">Order ID</p>

                        <p className="mt-1 font-semibold text-gray-800">
                          #{order._id?.slice(-8).toUpperCase()}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          {formatDate(order.createdAt)}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusStyle(
                          order.status,
                        )}`}
                      >
                        {order.status || "Pending"}
                      </span>
                    </div>

                    {/* Food Items */}
                    <div className="space-y-4 p-5">
                      {foodItems.length > 0 ? (
                        foodItems.map((item, index) => {
                          const food =
                            item.food && typeof item.food === "object"
                              ? item.food
                              : null;

                          const foodName =
                            food?.itemName ||
                            food?.iteamName ||
                            food?.name ||
                            "Food Item";

                          const quantity = Number(item.quantity) || 1;
                          const price = Number(item.price) || 0;

                          return (
                            <div
                              key={item._id || index}
                              className="flex items-center justify-between gap-4"
                            >
                              <div className="flex min-w-0 items-center gap-3">
                                {food?.itemImage ? (
                                  <img
                                    src={food.itemImage}
                                    alt={foodName}
                                    className="h-12 w-12 shrink-0 rounded-xl object-cover"
                                  />
                                ) : (
                                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                                    🍽️
                                  </div>
                                )}

                                <div className="min-w-0">
                                  <h3 className="truncate font-semibold text-gray-800">
                                    {foodName}
                                  </h3>

                                  <p className="mt-1 text-sm text-gray-500">
                                    {formatMoney(price)} × {quantity}
                                  </p>
                                </div>
                              </div>

                              <p className="whitespace-nowrap font-semibold text-gray-800">
                                {formatMoney(price * quantity)}
                              </p>
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-sm text-gray-500">
                          Item details are unavailable.
                        </p>
                      )}
                    </div>

                    {/* Delivery Address / Location */}
                    {order.address && (
                      <div className="mx-5 mb-4 rounded-xl bg-gray-50 p-4">
                        <p className="mb-2 text-sm font-semibold text-gray-700">
                          📍 Delivery Location
                        </p>

                        <p className="break-words text-sm text-gray-600">
                          Latitude: {order.address.latitude ?? "N/A"}
                        </p>

                        <p className="break-words text-sm text-gray-600">
                          Longitude: {order.address.longitude ?? "N/A"}
                        </p>
                      </div>
                    )}

                    {/* Order Total */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50 p-5">
                      <div>
                        <p className="text-sm text-gray-500">Total Amount</p>

                        <p className="mt-1 text-xl font-bold text-gray-900">
                          {formatMoney(order.totalprice)}
                        </p>
                      </div>

                      <span className="text-sm font-medium text-gray-500">
                        {foodItems.length} item types
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
