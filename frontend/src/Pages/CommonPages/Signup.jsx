import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "user",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/api/signup",
        formData,
      );
      alert(response.data.message || "Signup successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        userType: "user",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
        {/* Left Section */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-primary p-10 text-white md:flex">
          <div>
            <Link to="/" className="text-2xl font-extrabold tracking-wide">
              Foodie<span className="text-yellow-300">.</span>
            </Link>

            <p className="mt-2 text-sm text-orange-100">
              Fresh food, delivered with love.
            </p>
          </div>

          <div className="relative z-10 py-10">
            <span className="text-7xl">🍕</span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight">
              Your favorite food,
              <br />
              just a click away.
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-orange-100">
              Discover delicious meals, explore nearby shops and enjoy doorstep
              delivery with Foodie.
            </p>
          </div>

          <p className="text-sm text-orange-100">Good food. Good mood. ❤️</p>

          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-orange-400/40" />
          <div className="absolute -right-10 top-32 h-36 w-36 rounded-full bg-orange-300/30" />
        </div>

        {/* Right Section: Signup Form */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="mb-8 md:hidden">
            <Link to="/" className="text-3xl font-extrabold text-primary">
              Foodie<span className="text-accent">.</span>
            </Link>
          </div>

          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Join Foodie
            </p>

            <h1 className="text-3xl font-extrabold text-heading sm:text-4xl">
              Create Account
            </h1>

            <p className="mt-3 text-sm leading-6 text-muted">
              Create your account and start your delicious journey with us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Username
              </label>

              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-heading outline-none transition placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-orange-100"
              />
            </div>

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

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  minLength={8}
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

            {/* User Type */}
            <div>
              <label
                htmlFor="userType"
                className="mb-2 block text-sm font-semibold text-heading"
              >
                Register As
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
                <option value="delivery">Delivery Partner</option>
                <option value="shop">Shop Owner</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3.5 font-bold text-white shadow-lg shadow-orange-200 transition duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl active:translate-y-0"
              onClick={handleSubmit}
            >
              Create Account →
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-primary hover:text-primary-dark"
            >
              Login
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-gray-400">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
