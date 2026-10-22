import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageMenu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [message, setMessage] = useState("");

  // Fetch all food items
  const fetchItems = async () => {
    try {
      setLoading(true);
      setMessage("");

      // Is endpoint ko backend mein banana hoga
      const response = await axios.get(
        "http://localhost:3000/api/shop/my-items",
        {
          withCredentials: true,
        },
      );

      console.log(response);
      setItems(response.data.items);
    } catch (error) {
      console.error("Fetch items error:", error);
      setMessage(
        error.response?.data?.message || "Food items load nahi ho paye.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Delete food item
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Kya tum is food item ko delete karna chahte ho?",
    );

    if (!confirmDelete) return;

    try {
      // Is endpoint ko backend mein banana hoga
      await axios.delete(`http://localhost:3000/api/shop/item/${id}`, {
        withCredentials: true,
      });

      window.location.reload();

      setMessage("Food item successfully delete ho gaya.");
    } catch (error) {
      console.error("Delete item error:", error);
      setMessage(error.response?.data?.message || "Item delete nahi ho paya.");
    }
  };

  // Search and category filter
  const filteredItems = items.filter((item) => {
    const itemName = item.iteamName || "";

    const matchesSearch = itemName.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = ["All", "Pizza", "Burger", "Biryani", "Momos"];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-medium text-orange-600">
              SHOP MANAGEMENT
            </p>

            <h1 className="text-3xl font-bold text-gray-900">Manage Menu</h1>

            <p className="mt-2 text-sm text-gray-500">
              Apne restaurant ke food items manage karo.
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/shop/add-food")}
            className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            + Add Food Item
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Food Items</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {items.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Categories</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {new Set(items.map((item) => item.category)).size}
            </h2>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Filtered Items</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              {filteredItems.length}
            </h2>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Search Food
              </label>

              <input
                type="text"
                placeholder="Search by food name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div className="md:w-64">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Filter by Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-orange-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className="mb-5 rounded-xl bg-orange-50 p-4 text-sm text-orange-700">
            {message}
          </div>
        )}

        {/* Food Items */}
        {loading ? (
          <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
            <p className="mt-4 text-gray-500">Loading food items...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mb-4 text-5xl">🍽️</div>

            <h3 className="text-xl font-bold text-gray-900">
              No Food Items Found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {items.length === 0
                ? "Abhi tumhare menu mein koi food item nahi hai."
                : "Search ya category filter change karke dekho."}
            </p>

            {items.length === 0 && (
              <button
                onClick={() => (window.location.href = "/shop/add-food")}
                className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Add Your First Food Item
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  {item.iteamImage ? (
                    <img
                      src={item.iteamImage}
                      alt={item.iteamName}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl">
                      🍔
                    </div>
                  )}

                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-600 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.iteamName}
                    </h3>

                    <p className="whitespace-nowrap font-bold text-orange-600">
                      ₹{item.price}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500">
                    Category: {item.category}
                  </p>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      disabled
                      title="Edit functionality abhi connect nahi hai"
                      className="flex-1 cursor-not-allowed rounded-xl border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-400"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {!loading && filteredItems.length > 0 && (
          <p className="mt-6 text-center text-sm text-gray-500">
            Showing {filteredItems.length} of {items.length} food items
          </p>
        )}
      </div>
    </div>
  );
}
