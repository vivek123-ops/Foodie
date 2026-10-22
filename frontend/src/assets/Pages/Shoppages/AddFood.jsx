import { useState } from "react";
import axios from "axios";

const AddFood = () => {
  const [formData, setFormData] = useState({
    iteamName: "",
    price: "",
    category: "",
  });

  const [itemImage, setItemImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  // Input handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image select karna
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage({
        text: "Please select a valid image.",
        type: "error",
      });
      return;
    }

    // Purana preview URL clean karo
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setItemImage(file);
    setPreview(URL.createObjectURL(file));

    setMessage({ text: "", type: "" });
  };

  // Form submit karna
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({ text: "", type: "" });

    if (!itemImage) {
      setMessage({
        text: "Please select a food image.",
        type: "error",
      });
      return;
    }

    if (Number(formData.price) <= 0) {
      setMessage({
        text: "Price must be greater than zero.",
        type: "error",
      });
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("iteamName", formData.iteamName.trim());
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("itemImage", itemImage);

      const response = await axios.post(
        "http://localhost:3000/api/additeam",
        data,
        {
          withCredentials: true,
        },
      );

      setMessage({
        text: response.data.message || "Food item added successfully!",
        type: "success",
      });

      setFormData({
        iteamName: "",
        price: "",
        category: "",
      });

      setItemImage(null);

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      setPreview("");
    } catch (error) {
      console.error("Add food error:", error.response?.data || error.message);

      setMessage({
        text:
          error.response?.data?.message ||
          "Unable to add food item. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Form reset karna
  const handleReset = () => {
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setFormData({
      iteamName: "",
      price: "",
      category: "",
    });

    setItemImage(null);
    setPreview("");
    setMessage({ text: "", type: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="mb-2 text-sm text-slate-500">
              Foodie / Partner / Food Items
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-800">
              Add Food Item
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Add delicious food to your restaurant menu.
            </p>
          </div>

          <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-4xl sm:flex">
            🍽️
          </div>
        </div>

        {/* Main layout */}
        <div className="grid items-start gap-7 lg:grid-cols-5">
          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
            <form onSubmit={handleSubmit}>
              {/* Section 1 */}
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  01
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Food Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Enter your food item details.
                  </p>
                </div>
              </div>

              {/* Food name */}
              <div className="mb-6">
                <label
                  htmlFor="iteamName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Food Item Name *
                </label>

                <input
                  id="iteamName"
                  type="text"
                  name="iteamName"
                  placeholder="e.g. Paneer Pizza"
                  value={formData.iteamName}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Price and Category */}
              <div className="mb-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="price"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Price (₹) *
                  </label>

                  <input
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0.01"
                    step="0.01"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Category *
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  >
                    <option value="">Select category</option>
                    <option value="Pizza">🍕 Pizza</option>
                    <option value="Burger">🍔 Burger</option>
                    <option value="Biryani">🍛 Biryani</option>
                    <option value="Momos">🥟 Momos</option>
                  </select>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-6 mt-9 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  02
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Food Image
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Upload a clear image of your food.
                  </p>
                </div>
              </div>

              {/* Image upload */}
              <div>
                <label
                  htmlFor="itemImage"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Upload Image *
                </label>

                <label
                  htmlFor="itemImage"
                  className={`flex min-h-56 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed transition ${
                    preview
                      ? "border-orange-300 bg-white p-3"
                      : "border-orange-200 bg-orange-50/50 p-6 hover:bg-orange-50"
                  }`}
                >
                  {preview ? (
                    <img
                      src={preview}
                      alt="Food preview"
                      className="max-h-64 w-full rounded-xl object-contain"
                    />
                  ) : (
                    <>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl">
                        📸
                      </div>

                      <p className="text-center font-semibold text-slate-700">
                        Click to upload food image
                      </p>

                      <p className="mt-2 text-center text-xs text-slate-500">
                        PNG, JPG or WEBP
                      </p>
                    </>
                  )}
                </label>

                <input
                  id="itemImage"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

                {preview && (
                  <button
                    type="button"
                    onClick={() => {
                      URL.revokeObjectURL(preview);
                      setPreview("");
                      setItemImage(null);

                      const input = document.getElementById("itemImage");
                      if (input) input.value = "";
                    }}
                    className="mt-3 text-sm font-semibold text-red-500 hover:text-red-600"
                  >
                    Remove image
                  </button>
                )}
              </div>

              {/* Success / Error */}
              {message.text && (
                <div
                  role="status"
                  className={`mt-6 rounded-xl p-4 text-sm font-medium ${
                    message.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message.text}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Reset
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Adding Food..." : "+ Add Food Item"}
                </button>
              </div>
            </form>
          </div>

          {/* Live Preview */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-sm font-bold tracking-wide text-slate-700">
                  LIVE PREVIEW
                </h2>

                <span className="flex items-center gap-2 text-xs text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Preview
                </span>
              </div>

              {/* Food card */}
              <div className="overflow-hidden rounded-2xl border border-slate-100">
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-orange-50">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Selected food"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-7xl">🍲</span>
                  )}

                  <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-2 text-xs font-bold text-orange-600 shadow-sm">
                    {formData.category || "Food Category"}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Your menu item
                  </p>

                  <h3 className="mt-3 break-words text-xl font-bold text-slate-800">
                    {formData.iteamName || "Your delicious food"}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Freshly prepared and ready to order.
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-2xl font-bold text-orange-500">
                      ₹{formData.price || "0"}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-2xl text-white">
                      +
                    </span>
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="mt-5 flex gap-3 rounded-xl bg-amber-50 p-4">
                <span className="text-xl">💡</span>

                <div>
                  <h3 className="text-sm font-bold text-slate-800">Pro Tip</h3>

                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Use a clear, well-lit food photo to make your menu
                    attractive to customers.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
