import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background text-heading">
      {/* Navbar */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-3xl font-extrabold text-primary">
            Foodie<span className="text-accent">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="font-medium text-primary">
              Home
            </a>
            <a
              href="#about"
              className="font-medium text-muted hover:text-primary"
            >
              About Us
            </a>
            <a
              href="#services"
              className="font-medium text-muted hover:text-primary"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="font-medium text-muted hover:text-primary"
            >
              How It Works
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-3 py-2 font-semibold hover:text-primary"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-dark"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-light-orange">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
              🍽️ Welcome to Foodie
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Delicious Food,
              <span className="mt-2 block text-primary">Delivered to You.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
              Discover your favourite meals, connect with local food shops and
              enjoy a convenient food delivery experience right at your
              doorstep.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="rounded-xl bg-primary px-7 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-primary-dark"
              >
                Get Started →
              </Link>

              <a
                href="#about"
                className="rounded-xl border border-gray-200 bg-white px-7 py-4 font-bold transition hover:border-primary hover:text-primary"
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-muted">
              <span>✓ Easy Ordering</span>
              <span>✓ Local Food Shops</span>
              <span>✓ Convenient Delivery</span>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-10">
            <div className="absolute h-64 w-64 rounded-full bg-orange-200 sm:h-80 sm:w-80" />

            <div className="relative flex h-60 w-60 items-center justify-center rounded-[2.5rem] bg-white text-9xl shadow-2xl sm:h-80 sm:w-80 sm:text-[10rem]">
              🍔
            </div>

            <div className="absolute right-0 top-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:right-4">
              <p className="font-bold">Fresh & Delicious</p>
              <p className="mt-1 text-sm text-muted">
                Made for your cravings ❤️
              </p>
            </div>

            <div className="absolute bottom-0 left-0 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-4">
              <p className="font-bold">Hungry?</p>
              <p className="mt-1 text-sm text-muted">Foodie is here for you!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            About Foodie
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Making Food Delivery Simple
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Foodie is a food delivery platform designed to connect customers,
            local shop owners and delivery partners. Our goal is to make
            discovering food and placing orders simple and convenient.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-widest text-primary">
              Our Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              One Platform, Three Experiences
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-background p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-light-orange text-4xl">
                🍽️
              </div>

              <h3 className="mt-5 text-xl font-bold">For Customers</h3>

              <p className="mt-3 leading-7 text-muted">
                Discover food, explore local shops and enjoy a convenient
                ordering experience.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-background p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-light-orange text-4xl">
                🏪
              </div>

              <h3 className="mt-5 text-xl font-bold">For Shop Owners</h3>

              <p className="mt-3 leading-7 text-muted">
                Manage your shop, showcase your menu and handle customer orders
                through one platform.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-background p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-light-orange text-4xl">
                🛵
              </div>

              <h3 className="mt-5 text-xl font-bold">For Delivery Partners</h3>

              <p className="mt-3 leading-7 text-muted">
                Connect with delivery opportunities and help bring food orders
                to customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            Simple Process
          </p>

          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-light-orange text-3xl">
              👤
            </div>
            <h3 className="mt-5 text-xl font-bold">1. Create an Account</h3>
            <p className="mt-3 leading-7 text-muted">
              Sign up and choose how you want to use the Foodie platform.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-light-orange text-3xl">
              🍕
            </div>
            <h3 className="mt-5 text-xl font-bold">2. Explore & Order</h3>
            <p className="mt-3 leading-7 text-muted">
              Customers can discover food and place orders through the app.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-light-orange text-3xl">
              🛵
            </div>
            <h3 className="mt-5 text-xl font-bold">3. Enjoy the Experience</h3>
            <p className="mt-3 leading-7 text-muted">
              Orders can be managed by shops and fulfilled by delivery partners.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Join the Foodie Community!
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-orange-100">
            Whether you love discovering food, own a food shop or want to
            deliver orders, there is a place for you on Foodie.
          </p>

          <Link
            to="/signup"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-4 font-bold text-primary transition hover:bg-orange-50"
          >
            Create Your Account →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heading text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
          <Link to="/" className="text-2xl font-extrabold">
            Foodie<span className="text-accent">.</span>
          </Link>

          <p className="text-center text-sm text-gray-300">
            Making every meal a little more special.
          </p>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Foodie.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
