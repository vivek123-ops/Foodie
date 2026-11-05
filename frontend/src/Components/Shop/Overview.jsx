import React from "react";

export const Overview = () => {
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
  return (
    <div>
      {" "}
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
    </div>
  );
};
