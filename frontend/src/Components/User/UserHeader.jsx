import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/user/home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-2xl">
            🍔
          </div>

          <span className="text-2xl font-extrabold tracking-tight">
            Food<span className="text-primary">ie.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link to="/user/home" className="text-primary">
            Home
          </Link>

          <Link to="/user/menu" className="transition hover:text-primary">
            Popular Food
          </Link>

          <Link to="/user/checkorder" className="transition hover:text-primary">
            Orders
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <Link
            to="/user/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-xl hover:border-primary"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Username */}
          <div className="hidden text-right sm:block">
            <p className="text-xs text-muted">Welcome back,</p>
            <p className="max-w-28 truncate text-sm font-bold">
              {user.username || "Food Lover"}
            </p>
          </div>

          {/* Desktop Logout */}
          <button
            onClick={logout}
            className="hidden rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary sm:block"
          >
            Logout
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-gray-200 px-3 py-2 text-xl md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold">
            <Link to="/user/home" onClick={closeMenu}>
              🏠 Home
            </Link>

            <Link to="/user/menu" onClick={closeMenu}>
              🍕 Popular Food
            </Link>

            <Link to="/user/checkorder" onClick={closeMenu}>
              📦 My Orders
            </Link>

            <div className="border-t border-gray-100 pt-4">
              <p className="mb-3 text-xs text-muted">
                Welcome, {user.username || "Food Lover"}
              </p>

              <button
                onClick={logout}
                className="w-full rounded-xl bg-primary px-4 py-3 text-left font-bold text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default UserHeader;
