import React from "react";

const HeroSection = () => {
  return (
    <>
      {" "}
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
    </>
  );
};

export default HeroSection;
