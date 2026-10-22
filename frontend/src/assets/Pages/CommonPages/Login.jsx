import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/login",
        formData,
        {
          withCredentials: true,
        },
      );

      alert(response.data.message || "Login successful!");

      const { user, token } = response.data;
      // Agar backend JWT token return karta hai, toh use securely
      localStorage.setItem("token", token);
      // manage karne ke liye apni authentication strategy use karo.
      localStorage.setItem("user", JSON.stringify(user));
      switch (user.userType) {
        case "user":
          navigate("/user/home");
          break;

        case "shop":
          if (response.data.hasShop) {
            navigate("/shop/dashboard");
          } else {
            navigate("/shop/home");
          }
          break;

        case "delivery":
          if (response.data.hasDeliveryProfile) {
            navigate("/delivery/dashboard");
          } else {
            navigate("/delivery/home");
          }
          break;

        default:
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          alert("Invalid user role");
      }
    } catch (error) {
      console.error("Login error:", error);

      setError(
        error.response?.data?.message ||
          "Login failed. Please check your email and password.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        {/* Left Section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-primary p-10 text-white md:flex">
          <div>
            <Link to="/" className="text-3xl font-extrabold">
              Foodie<span className="text-accent">.</span>
            </Link>

            <p className="mt-2 text-sm text-orange-100">
              Fresh food, delivered with love.
            </p>
          </div>

          <div className="relative z-10 py-10">
            <span className="text-7xl">🍔</span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight">
              Welcome back!
              <br />
              Your food awaits.
            </h1>

            <p className="mt-4 leading-7 text-orange-100">
              Sign in to explore delicious meals, order your favourites and
              enjoy doorstep delivery.
            </p>
          </div>

          <p className="text-sm text-orange-100">Good food. Good mood. ❤️</p>

          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-orange-400/40" />
          <div className="absolute -right-10 top-32 h-36 w-36 rounded-full bg-orange-300/30" />
        </div>

        {/* Right Section */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mb-8 md:hidden">
            <Link to="/" className="text-3xl font-extrabold text-primary">
              Foodie<span className="text-accent">.</span>
            </Link>
          </div>

          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Welcome Back
            </p>

            <h2 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Login to Foodie
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-heading outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>
            {/* Account Type */}
            <div>
              <label
                htmlFor="userType"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Login As
              </label>

              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-heading outline-none transition focus:border-primary focus:bg-white focus:ring-4 focus:ring-orange-100"
              >
                <option value="user">Customer</option>
                <option value="shop">Shop Owner</option>
                <option value="delivery">Delivery Partner</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-heading"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-20 text-sm text-heading outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-orange-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-primary hover:text-primary-dark"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-4 py-3 text-sm text-error"
              >
                {error}
              </p>
            )}
            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              onclink={handleSubmit}
            >
              {loading ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-7 text-center text-sm text-muted">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-primary hover:text-primary-dark"
            >
              Create Account
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-gray-400">
            Delicious food is just a login away. 🍕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
