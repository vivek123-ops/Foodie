import React, { useState } from "react";

import { Sidebar } from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {" "}
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
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-gray-100 bg-white p-6 transition-transform duration-300 lg:fixed lg:top-0 lg:h-screen lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>
      <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-gray-100 bg-white px-4 py-4 sm:px-7 lg:ml-72 lg:w-[calc(100%-18rem)] lg:px-10">
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
    </>
  );
};

export default Header;
