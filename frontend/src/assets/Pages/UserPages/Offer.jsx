import React from "react";

export const Offer = () => {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-heading p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="font-semibold text-accent">A LITTLE TREAT FOR YOU</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Good food. Great mood.
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-gray-300">
              Explore the menu and discover your next favourite meal.
            </p>
          </div>

          <a
            href="#popular"
            className="shrink-0 rounded-xl bg-primary px-6 py-3 font-bold transition hover:bg-primary-dark"
          >
            Order Now →
          </a>
        </div>
      </section>
    </div>
  );
};
