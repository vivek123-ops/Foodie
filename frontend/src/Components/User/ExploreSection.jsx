import React from "react";

const ExploreSection = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burger", emoji: "🍔" },
    { name: "Biryani", emoji: "🍛" },
    { name: "Momos", emoji: "🥟" },
  ];

  return (
    <section
      id="categories"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <div className="mb-7">
        <p className="font-semibold text-primary">EXPLORE</p>

        <h2 className="mt-2 text-3xl font-extrabold">What's on your mind?</h2>

        <p className="mt-2 text-muted">
          Choose a category and find something delicious.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {["All", ...categories.map((category) => category.name)].map(
          (category) => {
            const selected = activeCategory === category;

            const emoji = categories.find(
              (item) => item.name === category,
            )?.emoji;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-2xl border px-5 py-3 font-semibold transition ${
                  selected
                    ? "border-primary bg-primary text-white shadow-md shadow-orange-100"
                    : "border-gray-200 bg-white hover:border-primary hover:text-primary"
                }`}
              >
                {emoji && <span className="mr-2">{emoji}</span>}
                {category}
              </button>
            );
          },
        )}
      </div>
    </section>
  );
};

export default ExploreSection;
