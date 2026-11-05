import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <>
      {" "}
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
};
