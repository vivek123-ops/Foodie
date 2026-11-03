import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/cartSlice";
import UserHeader from "../../../Components/User/UserHeader";

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Biryani",
  "Chinese",
  "South Indian",
  "Dessert",
];

export default function Menu() {
  const dispatch = useDispatch();

  const [foods, setFoods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        setError("");

        // Apne actual backend GET endpoint ke according URL change karna.
        const response = await axios.get("http://localhost:3000/api/item/all");

        const data = response.data;

        const foodList = Array.isArray(data)
          ? data
          : Array.isArray(data.items)
            ? data.items
            : Array.isArray(data.foods)
              ? data.foods
              : [];

        setFoods(foodList);
      } catch (err) {
        console.error("Food fetch error:", err.response?.data || err.message);

        setError("Menu load nahi ho paaya. Backend API endpoint check karo.");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const filteredFoods = foods.filter((food) => {
    const name = food.itemName || food.iteamName || food.name || "";

    const matchesSearch = name.toLowerCase().includes(search.toLowerCase());

    const foodCategory = food.category || "";

    const matchesCategory =
      selectedCategory === "All" ||
      foodCategory.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (food) => {
    dispatch(
      addToCart({
        ...food,
        _id: food._id,
        itemName: food.itemName || food.iteamName || food.name,
        price: Number(food.price) || 0,
        quantity: 1,
      }),
    );

    setMessage(
      `${food.itemName || food.iteamName || food.name || "Food"} added to cart!`,
    );

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="min-h-screen bg-orange-50/40">
      {/* Hero Section */}
      {<UserHeader />}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 px-5 py-14 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-100">
            Fresh • Delicious • Delivered
          </p>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Discover Your
            <span className="block text-yellow-200">Favourite Food 🍕</span>
          </h1>

          <p className="mt-4 max-w-xl text-orange-50">
            Explore delicious food from your favourite restaurants and order
            your next meal in just a few clicks.
          </p>

          <a
            href="#food-menu"
            className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-orange-600 shadow transition hover:bg-orange-50"
          >
            Explore Menu ↓
          </a>
        </div>
      </section>

      <main id="food-menu" className="mx-auto max-w-7xl px-4 py-10 sm:px-8">
        {/* Heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-semibold text-orange-600">OUR MENU</p>

            <h2 className="mt-1 text-3xl font-extrabold text-gray-900">
              Explore Delicious Food
            </h2>

            <p className="mt-2 text-gray-500">
              Find something tasty for your next meal.
            </p>
          </div>

          <div className="rounded-xl bg-white px-4 py-3 font-semibold text-gray-700 shadow-sm">
            🍽️ {filteredFoods.length} Items
          </div>
        </div>

        {/* Success Message */}
        {message && (
          <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 font-semibold text-green-700">
            ✓ {message}
          </div>
        )}

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search pizza, burger, biryani..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
          />
        </div>

        {/* Categories */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />

            <p className="mt-4 font-medium text-gray-500">
              Loading delicious food...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
            <p className="font-semibold text-red-600">{error}</p>

            <p className="mt-2 text-sm text-gray-500">
              Check the API route and make sure your backend is running.
            </p>
          </div>
        )}

        {/* Food Cards */}
        {!loading && !error && filteredFoods.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredFoods.map((food) => {
              const name =
                food.itemName || food.iteamName || food.name || "Food Item";

              const image =
                food.itemImage || food.foodImage || food.image || "";

              return (
                <div
                  key={food._id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Food Image */}
                  <div className="relative h-52 overflow-hidden bg-orange-50">
                    {image ? (
                      <img
                        src={image}
                        alt={name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-6xl">
                        🍽️
                      </div>
                    )}

                    {food.category && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-orange-600 shadow-sm">
                        {food.category}
                      </span>
                    )}
                  </div>

                  {/* Food Details */}
                  <div className="p-5">
                    <h3 className="truncate text-lg font-bold text-gray-900">
                      {name}
                    </h3>

                    <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
                      {food.description ||
                        "Freshly prepared and full of flavour."}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-xl font-extrabold text-orange-600">
                        ₹{(Number(food.price) || 0).toLocaleString("en-IN")}
                      </p>

                      <button
                        onClick={() => handleAddToCart(food)}
                        className="rounded-xl bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* No Results */}
        {!loading && !error && filteredFoods.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">🔎</div>

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              No food items found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
