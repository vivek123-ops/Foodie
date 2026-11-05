import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sidebar } from "../../../Components/Shop/Sidebar";
import OrderPages from "./OrderPages";
import { Overview } from "../../../Components/Shop/Overview";
import { HeroSection } from "../UserPages/HeroSection";
import Footer from "../../../Components/Shop/Footer";

const ShopDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 lg:flex">
      <main className="w-full">
        {/* Welcome */}
        <HeroSection />
        <div className="space-y-8 p-4 sm:p-7 lg:p-10">
          {/* {overview Result} */}
          <Overview />

          {/* Orders */}
          <OrderPages />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default ShopDashboard;
