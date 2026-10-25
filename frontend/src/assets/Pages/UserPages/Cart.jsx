import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../../Redux/cartSlice";
import axios from "axios";

const money = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount)
    ? `₹${amount.toLocaleString("en-IN")}`
    : `₹${value ?? 0}`;
};

export default function AddToCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Expected Redux shape: state.cart.items
  const cartItems = useSelector((state) => state.cart?.items ?? []);

  const total = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
        0,
      ),
    [cartItems],
  );

  const handleRemove = (item) => {
    dispatch(removeFromCart(item._id));
  };

  const handleQuantityChange = (item, change) => {
    const currentQuantity = Number(item.quantity) || 1;

    if (change < 0 && currentQuantity <= 1) {
      dispatch(removeFromCart(item._id));
      return;
    }

    // This page assumes addToCart increments quantity for an existing item.
    if (change > 0) {
      dispatch(addToCart({ ...item, quantity: 1 }));
    } else {
      // If your slice doesn't support decrementQuantity, removing at quantity 1
      // is the safe fallback. Add decrementQuantity to the slice for true decrement.
      dispatch(removeFromCart(item._id));
      for (let i = 1; i < currentQuantity - 1; i += 1) {
        dispatch(addToCart({ ...item, quantity: 1 }));
      }
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const orderData = {
            items: cartItems.map((item) => ({
              foodId: item._id,
              name: item.iteamName || item.itemName,
              price: Number(item.price),
              quantity: Number(item.quantity) || 1,
            })),

            totalAmount: total,

            deliveryLocation: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          };

          const response = await axios.post(
            "http://localhost:3000/api/sumit/order",
            orderData,
            { withCredentials: true },
          );

          console.log("Backend response:", response.data);

          alert("Order data sent to backend successfully!");
          dispatch(clearCart());

          navigate("/checkorder", {
            state: { order: response.data.order },
          });
        } catch (error) {
          console.error(
            "Order request failed:",
            error.response?.data || error.message,
          );

          alert("Unable to send order data to backend.");
        }
      },
      (error) => {
        console.error("Location error:", error.message);
        alert("Please allow location access.");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-orange-600"
          >
            Foodie<span className="text-slate-900">.</span>
          </Link>
          <nav className="flex items-center gap-3 text-sm font-semibold sm:gap-6">
            <Link
              to="/user/home"
              className="text-slate-600 transition hover:text-orange-600"
            >
              Explore food
            </Link>
            <span className="rounded-full bg-orange-100 px-3 py-2 text-orange-700">
              🛒 Cart ({cartItems.length})
            </span>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Your order
          </p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            Shopping Cart
          </h1>
          <p className="mt-2 text-slate-500">
            Review your favourite food before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <section className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
              🛒
            </div>
            <h2 className="text-2xl font-extrabold">Your cart is empty</h2>
            <p className="mx-auto mt-2 max-w-md text-slate-500">
              Looks like you haven't added any delicious food yet. Explore the
              menu and find something you love.
            </p>
            <Link
              to="/explore"
              className="mt-7 inline-flex rounded-xl bg-orange-600 px-6 py-3 font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
            >
              Explore food
            </Link>
          </section>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <section className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
                >
                  <div className="h-28 w-full shrink-0 overflow-hidden rounded-xl bg-orange-50 sm:w-32">
                    {item.iteamImage || item.itemImage ? (
                      <img
                        src={item.iteamImage || item.itemImage}
                        alt={item.iteamName || item.itemName || "Food"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full min-h-28 items-center justify-center text-4xl">
                        🍽️
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h2 className="text-lg font-extrabold">
                          {item.iteamName ||
                            item.itemName ||
                            item.name ||
                            "Food item"}
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.category || "Freshly prepared"}
                        </p>
                      </div>
                      <p className="font-extrabold text-orange-600">
                        {money(item.price)}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item, -1)}
                          aria-label={`Decrease quantity of ${item.iteamName || item.itemName || "food"}`}
                          className="h-8 w-8 rounded-md font-bold text-slate-700 transition hover:bg-slate-100"
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm font-bold">
                          {Number(item.quantity) || 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item, 1)}
                          aria-label={`Increase quantity of ${item.iteamName || item.itemName || "food"}`}
                          className="h-8 w-8 rounded-md font-bold text-slate-700 transition hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="text-sm text-slate-500">
                          Subtotal:{" "}
                          <span className="font-bold text-slate-900">
                            {money(
                              (Number(item.price) || 0) *
                                (Number(item.quantity) || 1),
                            )}
                          </span>
                        </p>
                        <button
                          type="button"
                          onClick={() => handleRemove(item)}
                          className="text-sm font-bold text-red-600 transition hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <Link
                to="/explore"
                className="inline-flex items-center gap-2 pt-2 font-bold text-orange-600 hover:text-orange-700"
              >
                <span aria-hidden="true">←</span> Continue shopping
              </Link>
            </section>

            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-extrabold">Order summary</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Items ({cartItems.length})</span>
                  <span>{money(total)}</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-600">
                  <span>Delivery fee</span>
                  <span className="font-semibold text-emerald-600">
                    Calculated at checkout
                  </span>
                </div>
                <div className="border-t border-dashed border-slate-200 pt-4">
                  <div className="flex justify-between gap-4 text-base font-black">
                    <span>Food total</span>
                    <span className="text-orange-600">{money(total)}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Delivery charges, if any, will be added at checkout.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCheckout}
                className="mt-7 w-full rounded-xl bg-orange-600 px-5 py-3.5 font-extrabold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700"
              >
                Proceed to checkout →
              </button>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <span>🔒</span> Safe and secure checkout
              </div>
            </aside>
          </div>
        )}
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Foodie. All rights reserved.</p>
          <p>Made with ❤️ for food lovers.</p>
        </div>
      </footer>
    </div>
  );
}
