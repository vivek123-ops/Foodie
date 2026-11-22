import React, { useState, useEffect } from "react";
import axios from "axios";

export const Overview = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    foodItems: 0,
    pendingOrders: 0,
  });

  const [loading, setLoading] = useState(true);

  // Fetch Dashboard Statistics
  const fetchDashboardStats = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:3000/api/shop/dashboard-stats",
        {
          withCredentials: true,
        },
      );

      setStats(response.data.stats);
    } catch (error) {
      console.error("Dashboard Stats Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const dashboardStats = [
    {
      title: "Total Orders",
      value: stats.totalOrders,
      change: "All orders",
      icon: "📦",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Total Revenue",
      value: `₹${stats.totalRevenue}`,
      change: "Total earnings",
      icon: "💰",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Food Items",
      value: stats.foodItems,
      change: "Your menu",
      icon: "🍔",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
      change: "Needs attention",
      icon: "⏳",
      color: "bg-yellow-50 text-yellow-600",
    },
  ];

  return (
    <div>
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-xl font-extrabold text-gray-900">
            Business Overview
          </h3>

          <span className="text-sm text-gray-500">Live Statistics</span>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading dashboard...</p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {dashboardStats.map((stat) => (
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
        )}
      </section>
    </div>
  );
};
