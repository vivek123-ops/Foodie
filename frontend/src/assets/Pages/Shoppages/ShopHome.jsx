import React from "react";
import { Link } from "react-router-dom";

const ShopHome = () => {
  const steps = [
    {
      number: "01",
      icon: "🏪",
      title: "Create Your Shop",
      description:
        "Register your restaurant with its name, address and shop image.",
    },
    {
      number: "02",
      icon: "🍕",
      title: "Add Your Food",
      description:
        "Add food items, upload images, set prices and organize your menu.",
    },
    {
      number: "03",
      icon: "📦",
      title: "Receive Orders",
      description:
        "Start receiving customer orders and manage them from your dashboard.",
    },
  ];

  const benefits = [
    {
      icon: "📈",
      title: "Grow Your Business",
      description: "Reach more customers and grow your food business online.",
    },
    {
      icon: "🍽️",
      title: "Manage Your Menu",
      description: "Add food items, update prices and manage your menu easily.",
    },
    {
      icon: "📋",
      title: "Manage Orders",
      description: "Keep track of incoming orders and update their status.",
    },
    {
      icon: "⚡",
      title: "Easy Management",
      description:
        "Manage your shop and food items from one convenient dashboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/shop/home" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-2xl">
              🍔
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-orange-500">
                Foodie
              </h1>
              <p className="text-xs font-medium text-gray-500">
                Partner Portal
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden text-sm font-medium text-gray-600 sm:block">
              Shop Owner
            </span>

            <Link
              to="/shop/create"
              className="rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Create Shop
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <span>🚀</span>
              Grow Your Business With Foodie
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Turn Your Food Business Into
              <span className="text-orange-500"> An Online Brand.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Bring your delicious food online, connect with more customers and
              manage your restaurant from one simple dashboard. Your journey
              starts here!
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shop/create"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Create Your Shop
                <span className="text-xl">→</span>
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 font-bold text-gray-700 transition hover:border-orange-300 hover:text-orange-600"
              >
                How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
              <span>✓ Easy Registration</span>
              <span>✓ Simple Menu Management</span>
              <span>✓ Online Order Management</span>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-orange-200/50 blur-2xl" />
            <div className="absolute -right-5 bottom-5 h-40 w-40 rounded-full bg-yellow-200/60 blur-2xl" />

            <div className="relative rounded-3xl border border-white bg-white p-5 shadow-2xl shadow-orange-100 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Your Business
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Starts With Foodie
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  🧑‍🍳
                </div>
              </div>

              <div className="mt-6 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-amber-200">
                <div className="text-center">
                  <div className="text-8xl">🍔</div>
                  <p className="mt-3 font-bold text-orange-800">
                    Delicious Food, Happy Customers!
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-orange-50 p-4">
                  <div className="text-2xl">🍽️</div>
                  <p className="mt-2 font-bold text-gray-900">Your Menu</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Showcase your dishes
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-4">
                  <div className="text-2xl">📦</div>
                  <p className="mt-2 font-bold text-gray-900">Your Orders</p>
                  <p className="mt-1 text-xs text-gray-500">
                    Manage orders easily
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-gray-100 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-100 text-xl">
                  ✨
                </div>

                <div>
                  <p className="font-bold text-gray-900">
                    Ready to get started?
                  </p>
                  <p className="text-sm text-gray-500">
                    Create your shop in a few simple steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-20 md:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
            Get Started
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Start Selling in 3 Simple Steps
          </h2>

          <p className="mt-4 leading-7 text-gray-500">
            Getting your restaurant online doesn't have to be complicated.
            Follow these simple steps to get started.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl transition group-hover:bg-orange-100">
                  {step.icon}
                </div>

                <span className="text-4xl font-black text-orange-100">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
                Why Foodie?
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
                Everything You Need to Manage Your Shop
              </h2>

              <p className="mt-5 leading-7 text-gray-500">
                From adding food items to managing customer orders, Foodie gives
                you a simple place to manage your online food business.
              </p>

              <Link
                to="/shop/create"
                className="mt-7 inline-flex items-center gap-2 font-bold text-orange-600 transition hover:text-orange-700"
              >
                Get Started Today <span>→</span>
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:border-orange-200 hover:bg-orange-50"
                >
                  <div className="text-3xl">{benefit.icon}</div>

                  <h3 className="mt-4 font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-12 text-center shadow-xl shadow-orange-200 sm:px-12 sm:py-16">
          <div className="text-5xl">🧡</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Your Food Business Deserves to Grow
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-orange-50">
            Take the first step toward building your online presence. Create
            your shop and start setting up your menu.
          </p>

          <Link
            to="/shop/create"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-orange-50"
          >
            Create Your Shop <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-gray-500 sm:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} Foodie Partner. All rights reserved.
          </p>

          <p>Made with 🧡 for food businesses.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShopHome;
