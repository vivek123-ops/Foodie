import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux/cartSlice";

const FoodCard = ({ food }) => {
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
    <>
      {/* Food Image */}
      <div className="relative overflow-hidden">
        <img
          src={food.iteamImage}
          alt={food.iteamName}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-primary shadow">
          {food.category}
        </span>
      </div>

      {/* Food Details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold capitalize">{food.iteamName}</h3>

          <span className="shrink-0 rounded-lg bg-green-50 px-2 py-1 text-sm font-bold text-green-700">
            {food.category}
          </span>
        </div>

        {/* Price and Cart Button */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <p className="text-xl font-extrabold">₹{food.price}</p>

          {isInCart ? (
            <button
              onClick={handleRemoveFromCart}
              className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-700"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white transition hover:bg-primary-dark"
            >
              + Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FoodCard;
