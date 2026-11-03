import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/cartSlice";

const FoodComponent = ({ food }) => {
  const dispatch = useDispatch();

  // Redux store se cart ke items nikalo
  const cartItems = useSelector((state) => state.cart.items);

  // Check karo ki ye food cart mein pehle se hai ya nahi
  const isInCart = cartItems.some((item) => item._id === food._id);

  const handleAddToCart = () => {
    dispatch(addToCart(food));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(food._id));
  };
  return (
    <div
      key={food._id}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Food Image */}
      <div className="relative h-52 overflow-hidden bg-orange-50">
        {food.iteamImage ? (
          <img
            src={food.iteamImage}
            alt={food.iteamName}
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
        <h3 className="truncate text-lg font-bold text-gray-900">{name}</h3>

        <p className="mt-2 line-clamp-2 min-h-10 text-sm text-gray-500">
          {food.description || "Freshly prepared and full of flavour."}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xl font-extrabold text-orange-600">
            ₹{(Number(food.price) || 0).toLocaleString("en-IN")}
          </p>

          {isInCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="rounded-xl bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600 active:scale-95"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="rounded-xl bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600 active:scale-95"
            >
              + Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodComponent;
