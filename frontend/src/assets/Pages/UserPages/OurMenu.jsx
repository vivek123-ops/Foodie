import React, { useEffect, useState } from "react";
import FoodCard from "./Foodcard";
import axios from "axios";
import ExploreSection from "../../../Components/User/ExploreSection";

const OurMenu = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState("All");

  // Backend se saare food items fetch karna
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getfoods", {
          withCredentials: true,
        });

        console.log("API Response:", response.data);
        console.log("Items received:", response.data.items);

        if (response.data.success) {
          setFoods(response.data.items || []);
        }
      } catch (error) {
        console.error(
          "Food fetch error:",
          error.response?.data || error.message,
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  // Search ke according food filter karna

  const filteredFoods = foods.filter((food) => {
    // Search bar ke according filter
    const matchesSearch = food.iteamName
      ?.toLowerCase()
      .includes(search.trim().toLowerCase());

    // Category ke according filter
    const matchesCategory =
      activeCategory === "All" ||
      food.category?.toLowerCase() === activeCategory.toLowerCase();

    // Dono conditions true honi chahiye
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <ExploreSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <section
        id="popular"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        {/* Heading and Search */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold text-primary">OUR MENU</p>

            <h2 className="mt-2 text-3xl font-extrabold">Popular Dishes</h2>

            <p className="mt-2 text-muted">
              Delicious picks for your next meal.
            </p>
          </div>
          {/* Search Input */}

          <div className="flex w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 sm:w-80">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search your favourite food..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full min-w-0 bg-transparent text-sm text-black outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold">Loading food items...</p>
          </div>
        )}

        {/* Food Items */}
        {!loading && filteredFoods.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFoods.map((food) => (
              <article
                key={food._id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FoodCard food={food} />
              </article>
            ))}
          </div>
        )}

        {/* No Food Found */}
        {!loading && filteredFoods.length === 0 && (
          <div className="rounded-2xl bg-white py-16 text-center">
            <p className="text-4xl">🔎</p>

            <h3 className="mt-4 text-xl font-bold">No food found</h3>

            <p className="mt-2 text-muted">Try searching for another food.</p>

            <button
              onClick={() => setSearch("")}
              className="mt-5 rounded-xl bg-primary px-5 py-2.5 font-semibold text-white"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default OurMenu;
