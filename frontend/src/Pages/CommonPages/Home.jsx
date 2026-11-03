import { Link } from "react-router-dom";

const categories = [
  { emoji: "🍕", name: "Pizza", description: "Cheesy, hot & delicious" },
  { emoji: "🍔", name: "Burgers", description: "Big bites, bold flavours" },
  { emoji: "🍛", name: "Biryani", description: "Aromatic and satisfying" },
  { emoji: "🥟", name: "Momos", description: "Little pockets of joy" },
];

const roles = [
  {
    emoji: "🍽️",
    title: "For food lovers",
    description:
      "Explore your favourite dishes, build your cart and keep track of every order in one place.",
    points: ["Discover food", "Easy ordering", "Order updates"],
  },
  {
    emoji: "🏪",
    title: "For shop owners",
    description:
      "Showcase your menu, manage food availability and keep incoming orders organised.",
    points: ["Manage your menu", "Handle orders", "Track sales"],
  },
  {
    emoji: "🛵",
    title: "For delivery partners",
    description:
      "Manage delivery assignments and move orders from pickup to the customer's doorstep.",
    points: [
      "View assignments",
      "Update delivery status",
      "See delivery history",
    ],
  },
];

const steps = [
  {
    number: "01",
    emoji: "🔎",
    title: "Find your favourites",
    description: "Browse categories and search for the meal you're craving.",
  },
  {
    number: "02",
    emoji: "🛒",
    title: "Place your order",
    description: "Choose your items, review your cart and confirm your order.",
  },
  {
    number: "03",
    emoji: "👨‍🍳",
    title: "Freshly prepared",
    description: "The shop receives your order and gets your food ready.",
  },
  {
    number: "04",
    emoji: "🛵",
    title: "Delivered with care",
    description: "A delivery partner picks up your order and brings it to you.",
  },
];

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf5] text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="text-3xl font-black tracking-tight text-orange-600"
          >
            Foodie<span className="text-slate-900">.</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#home" className="transition hover:text-orange-600">
              Home
            </a>
            <a href="#categories" className="transition hover:text-orange-600">
              Explore
            </a>
            <a href="#services" className="transition hover:text-orange-600">
              For Everyone
            </a>
            <a
              href="#how-it-works"
              className="transition hover:text-orange-600"
            >
              How It Works
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="rounded-xl px-3 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600 sm:px-4"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700 sm:px-5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute -right-28 -top-24 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-amber-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-bold text-orange-700 shadow-sm">
              <span>✨</span> Good food. Good mood.
            </div>

            <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Cravings meet
              <span className="block text-orange-600">their match.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover delicious meals from local food shops, order in a few
              simple steps and enjoy a smoother delivery experience with Foodie.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-4 font-extrabold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                Order your favourites <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-extrabold text-slate-800 transition hover:border-orange-300 hover:text-orange-700"
              >
                See how it works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
              <span>✓ Easy ordering</span>
              <span>✓ Local food shops</span>
              <span>✓ Order updates</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rotate-6 rounded-[2.5rem] bg-orange-200" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl shadow-orange-200/70">
              <div className="flex items-center justify-between px-3 pb-4 pt-2">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Today's pick
                  </p>
                  <p className="text-xl font-black">Made for your cravings</p>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-extrabold text-green-700">
                  Fresh picks
                </span>
              </div>

              <div className="flex min-h-64 items-center justify-center rounded-[2rem] bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100">
                <div className="text-center">
                  <div
                    className="text-9xl drop-shadow-md sm:text-[10rem]"
                    role="img"
                    aria-label="Burger"
                  >
                    🍔
                  </div>
                  <p className="mt-2 text-lg font-black text-slate-800">
                    Big flavour, happy bites
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 px-3 py-5">
                <div>
                  <p className="font-extrabold">Your next favourite</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Find it on Foodie
                  </p>
                </div>
                <Link
                  to="/signup"
                  className="shrink-0 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Explore food
                </Link>
              </div>
            </div>

            <div className="absolute -left-4 top-16 rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-sm font-extrabold">🍕 Something tasty?</p>
              <p className="mt-1 text-xs text-slate-500">
                Your choice, your meal
              </p>
            </div>
            <div className="absolute -right-2 bottom-20 rounded-2xl border border-orange-100 bg-white px-4 py-3 shadow-lg sm:-right-6">
              <p className="text-sm font-extrabold">🛵 From shop to door</p>
              <p className="mt-1 text-xs text-slate-500">
                A simpler food journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
              Explore the menu
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              What are you craving?
            </h2>
          </div>
          <p className="max-w-md leading-7 text-slate-600">
            From comforting classics to your favourite quick bites, start with a
            category and find your next meal.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group rounded-3xl border border-orange-100 bg-white p-5 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100 sm:p-6"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-4xl transition group-hover:scale-110">
                {category.emoji}
              </div>
              <h3 className="mt-4 text-lg font-extrabold">{category.name}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three experiences */}
      <section id="services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
              One platform, three experiences
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Foodie works for everyone
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Whether you're ordering a meal, running a food shop or delivering
              an order, there's a place for you here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {roles.map((role, index) => (
              <article
                key={role.title}
                className={`rounded-3xl border p-7 transition hover:-translate-y-1 hover:shadow-xl ${
                  index === 1
                    ? "border-orange-300 bg-orange-50/70 shadow-lg shadow-orange-100"
                    : "border-slate-100 bg-[#fffaf5]"
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  {role.emoji}
                </div>
                <h3 className="mt-5 text-xl font-black">{role.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-slate-600">
                  {role.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm font-semibold text-slate-700">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="font-black text-orange-600">✓</span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className="mt-7 inline-flex items-center gap-2 font-extrabold text-orange-700 transition hover:gap-3"
                >
                  Join Foodie <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">
            Simple from start to finish
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            How your order gets to you
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            A connected journey between the customer, the shop and the delivery
            partner.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-black tracking-widest text-orange-600">
                  {step.number}
                </span>
                <span className="text-3xl">{step.emoji}</span>
              </div>
              <h3 className="mt-5 text-lg font-black">{step.title}</h3>
              <p className="mt-2 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="absolute -right-10 -top-24 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-300">
              Your food journey starts here
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
              Good food brings people together.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Join Foodie as a customer, shop owner or delivery partner and be
              part of a better-connected food experience.
            </p>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 font-extrabold text-white transition hover:bg-orange-400"
            >
              Create your account <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <Link to="/" className="text-2xl font-black text-orange-600">
            Foodie<span className="text-slate-900">.</span>
          </Link>
          <p className="text-center text-sm text-slate-500">
            Good food, local shops and delivery—all connected.
          </p>
          <div className="flex gap-4 text-sm font-semibold text-slate-600">
            <Link to="/login" className="hover:text-orange-600">
              Log in
            </Link>
            <Link to="/signup" className="hover:text-orange-600">
              Sign up
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-100 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Foodie. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

export default Home;
