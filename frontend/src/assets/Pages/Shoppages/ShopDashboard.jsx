import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ShopDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Demo data: baad mein backend API se connect karenge
  const stats = [
    {
      title: "Total Orders",
      value: "124",
      change: "+12.5%",
      icon: "📦",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Revenue",
      value: "₹24,850",
      change: "+8.2%",
      icon: "💰",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Food Items",
      value: "18",
      change: "Your menu",
      icon: "🍔",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Pending Orders",
      value: "6",
      change: "Needs attention",
      icon: "⏳",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

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

  const foodItems = [
    {
      name: "Cheese Burger",
      category: "Burger",
      price: 149,
      emoji: "🍔",
      available: true,
    },
    {
      name: "Margherita Pizza",
      category: "Pizza",
      price: 249,
      emoji: "🍕",
      available: true,
    },
    {
      name: "Chicken Biryani",
      category: "Biryani",
      price: 199,
      emoji: "🍛",
      available: false,
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const SidebarContent = () => (
    <>
      <Link to="/shop/dashboard" className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-2xl">
          🍔
        </div>

        <div>
          <h1 className="text-2xl font-extrabold text-orange-500">Foodie</h1>
          <p className="text-xs text-gray-400">Partner Dashboard</p>
        </div>
      </Link>

      <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
        Main Menu
      </p>

      <nav className="space-y-2">
        <Link
          to="/shop/dashboard"
          onClick={() => setSidebarOpen(false)}
          className="flex items-center gap-3 rounded-xl bg-orange-50 px-4 py-3 font-semibold text-orange-600"
        >
          <span>📊</span>
          Dashboard
        </Link>

        <Link
          to="/shop/food"
          onClick={() => setSidebarOpen(false)}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-orange-600"
        >
          <span>🍕</span>
          Manage Food
        </Link>

        <Link
          to="/shop/orders"
          onClick={() => setSidebarOpen(false)}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-orange-600"
        >
          <span>📦</span>
          Orders
        </Link>

        <Link
          to="/shop/profile"
          onClick={() => setSidebarOpen(false)}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-50 hover:text-orange-600"
        >
          <span>🏪</span>
          Shop Profile
        </Link>
      </nav>

      <div className="mt-auto pt-10">
        <div className="rounded-2xl bg-orange-50 p-4">
          <div className="text-2xl">💡</div>
          <h3 className="mt-2 font-bold text-gray-800">Grow your business</h3>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Keep your menu updated and serve your customers better.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="mt-5 flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium text-red-500 transition hover:bg-red-50"
        >
          <span>🚪</span>
          Logout
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-100 bg-white p-6 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main content */}
      <main className="min-w-0 flex-1">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-100 bg-white px-4 py-4 sm:px-7 lg:px-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-xl hover:bg-gray-100 lg:hidden"
              aria-label="Open sidebar"
            >
              ☰
            </button>

            <div>
              <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                Dashboard
              </h2>
              <p className="mt-1 hidden text-sm text-gray-500 sm:block">
                Manage your shop and track your business.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="relative rounded-xl border border-gray-100 p-3 hover:bg-gray-50"
            >
              🔔
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
              S
            </div>
          </div>
        </header>

        <div className="space-y-8 p-4 sm:p-7 lg:p-10">
          {/* Welcome */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white sm:p-9">
            <div className="relative z-10 max-w-2xl">
              <p className="font-medium text-orange-100">
                Welcome to your dashboard 👋
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Let's grow your food business!
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-orange-50">
                Manage your food menu, track customer orders and keep your shop
                running smoothly.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/shop/add-food"
                  className="rounded-xl bg-white px-5 py-3 font-bold text-orange-600 transition hover:bg-orange-50"
                >
                  + Add Food Item
                </Link>

                <Link
                  to="/shop/orders"
                  className="rounded-xl border border-white/40 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  View Orders →
                </Link>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-5 -top-10 text-9xl opacity-20 sm:right-10 sm:text-[180px]">
              🍔
            </div>
          </section>

          {/* Stats */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-gray-900">
                Business Overview
              </h3>

              <span className="text-sm text-gray-500">Demo statistics</span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </span>

                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${stat.color}`}
                    >
                      {stat.icon}
                    </span>
                  </div>

                  <h4 className="mt-4 text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </h4>

                  <p className="mt-2 text-xs font-semibold text-gray-500">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Orders */}
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

          {/* Food items */}
          <section className="rounded-2xl border border-gray-100 bg-white p-5 sm:p-6">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-extrabold text-gray-900">
                  Your Food Items
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Preview your menu items.
                </p>
              </div>

              <Link
                to="/shop/food"
                className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                + Manage Menu
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {foodItems.map((food) => (
                <div
                  key={food.name}
                  className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-3xl">
                    {food.emoji}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-bold text-gray-900">
                      {food.name}
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      {food.category}
                    </p>

                    <p className="mt-2 font-extrabold text-orange-600">
                      ₹{food.price}
                    </p>
                  </div>

                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                      food.available ? "bg-green-500" : "bg-red-500"
                    }`}
                    title={food.available ? "Available" : "Unavailable"}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pb-3 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Foodie Partner Dashboard
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ShopDashboard;
