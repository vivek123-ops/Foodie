import React from "react";

export const HeroSection = () => {
  return (
    <>
      {" "}
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 overflow-hidden rounded-3xl bg-light-orange px-6 py-12 sm:px-10 lg:flex-row lg:px-16 lg:py-16">
          <div className="relative z-10 flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              🚀 Fast & Fresh Delivery
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Delicious food,
              <span className="block text-primary">delivered to you.</span>
            </h1>

            <p className="mt-5 max-w-xl leading-7 text-muted">
              Discover your favourite meals, explore amazing flavours and get
              fresh food delivered right to your doorstep.
            </p>

            <a
              href="#popular"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-primary-dark"
            >
              Explore Food <span>→</span>
            </a>

            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-xl font-extrabold">30 min</p>
                <p className="mt-1 text-muted">Average delivery</p>
              </div>
              <div className="border-l border-orange-200 pl-6">
                <p className="text-xl font-extrabold">Fresh</p>
                <p className="mt-1 text-muted">Made with care</p>
              </div>
              <div className="border-l border-orange-200 pl-6">
                <p className="text-xl font-extrabold">Easy</p>
                <p className="mt-1 text-muted">Simple ordering</p>
              </div>
            </div>
          </div>

          <div className="relative flex w-full flex-1 items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-accent/30 blur-3xl sm:h-80 sm:w-80" />
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=900"
              alt="Freshly baked pizza"
              className="relative h-64 w-full max-w-lg rounded-3xl object-cover shadow-2xl sm:h-80"
            />

            <div className="absolute bottom-4 left-2 rounded-2xl bg-white p-4 shadow-lg sm:bottom-6 sm:left-0">
              <p className="text-sm font-bold">⭐ 4.8/5 Rating</p>
              <p className="mt-1 text-xs text-muted">Loved by foodies</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
