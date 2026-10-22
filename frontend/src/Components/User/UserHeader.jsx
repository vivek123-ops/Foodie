import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserHeader = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };
  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      {" "}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/user/home" className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-2xl">
              🍔
            </div>
            <span className="text-2xl font-extrabold tracking-tight">
              Food<span className="text-primary">ie.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="text-primary">
              Home
            </a>
            <a href="#categories" className="transition hover:text-primary">
              Categories
            </a>
            <a href="#popular" className="transition hover:text-primary">
              Popular Food
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-xl hover:border-primary"
              aria-label={`Cart, ${cartCount} items`}
            >
              🛒
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </a>

            <div className="hidden text-right sm:block">
              <p className="text-xs text-muted">Welcome back,</p>
              <p className="max-w-28 truncate text-sm font-bold">
                {user.username || "Food Lover"}
              </p>
            </div>

            <button
              onClick={logout}
              className="rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default UserHeader;
