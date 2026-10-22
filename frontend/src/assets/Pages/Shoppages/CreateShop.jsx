import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateShop = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
  });

  const [shopImage, setShopImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5 MB.");
      return;
    }

    setError("");
    setShopImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.shopName.trim() || !formData.address.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!shopImage) {
      setError("Please upload your shop image.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      data.append("shopName", formData.shopName.trim());
      data.append("address", formData.address.trim());
      data.append("shopImage", shopImage);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:3000/api/shop/create",
        data,
        {
          withCredentials: true,
        },
        navigate("/shop/dashboard"),
      );

      if (response.data.success) {
        alert("Shop created successfully!");
        navigate("/shop/dashboard");
      } else {
        setError(response.data.message || "Unable to create shop.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Shop creation failed. Please check your backend API.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-50/60">
      {/* Header */}
      <header className="border-b border-orange-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/shop/home" className="flex items-center gap-2">
            <span className="text-3xl">🍔</span>

            <div>
              <h1 className="text-2xl font-extrabold text-orange-500">
                Foodie
              </h1>
              <p className="text-xs text-gray-500">Partner Portal</p>
            </div>
          </Link>

          <Link
            to="/shop/home"
            className="rounded-lg px-4 py-2 font-medium text-gray-600 hover:bg-gray-100"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-5xl px-5 py-10 md:py-16">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl shadow-orange-100 md:grid-cols-5">
          {/* Left panel */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-7 text-white md:col-span-2 md:p-9">
            <div className="text-5xl">🏪</div>

            <h2 className="mt-6 text-3xl font-extrabold">
              Let's Create Your Shop!
            </h2>

            <p className="mt-4 leading-7 text-orange-50">
              Bring your food business online. Create your shop profile and get
              ready to manage your menu and customer orders.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold">Shop Information</h3>
                  <p className="mt-1 text-sm text-orange-100">
                    Add your shop name and address.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold">Upload Shop Image</h3>
                  <p className="mt-1 text-sm text-orange-100">
                    Show customers your restaurant.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                  ✓
                </span>

                <div>
                  <h3 className="font-bold">Start Managing</h3>
                  <p className="mt-1 text-sm text-orange-100">
                    Continue to your shop dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-6 sm:p-9 md:col-span-3 md:p-10">
            <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Shop Registration
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Create Your Shop
            </h2>

            <p className="mt-2 text-gray-500">
              Enter your shop details below to get started.
            </p>

            {error && (
              <div
                role="alert"
                className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Shop Name */}
              <div>
                <label
                  htmlFor="shopName"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Shop Name <span className="text-red-500">*</span>
                </label>

                <input
                  id="shopName"
                  type="text"
                  name="shopName"
                  value={formData.shopName}
                  onChange={handleChange}
                  placeholder="e.g. Foodie Restaurant"
                  maxLength={100}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Shop Address <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your complete shop address"
                  rows={3}
                  maxLength={500}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              {/* Shop Image */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Shop Image <span className="text-red-500">*</span>
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 p-5 transition hover:border-orange-400 hover:bg-orange-50">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Shop preview"
                      className="h-40 w-full rounded-xl object-cover"
                    />
                  ) : (
                    <>
                      <span className="text-4xl">📸</span>

                      <p className="mt-3 font-semibold text-gray-700">
                        Upload your shop image
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG or WEBP · Maximum 5 MB
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </label>

                {preview && (
                  <button
                    type="button"
                    onClick={() => {
                      URL.revokeObjectURL(preview);
                      setPreview("");
                      setShopImage(null);
                    }}
                    className="mt-2 text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove image
                  </button>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Shop..." : "Create My Shop"}
                {!loading && <span>→</span>}
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Please make sure your shop details are correct before
                submitting.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateShop;
