import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./assets/Pages/CommonPages/Signup";
import Login from "./assets/Pages/CommonPages/Login";
import Home from "./assets/Pages/CommonPages/Home";
import UserHome from "./assets/Pages/UserPages/UserHome";
import ShopHome from "./assets/Pages/Shoppages/ShopHome";
import CreateShop from "./assets/Pages/Shoppages/CreateShop";
import ShopDashboard from "./assets/Pages/Shoppages/ShopDashboard";
import AddFood from "./assets/Pages/Shoppages/AddFood";
import ManageMenu from "./assets/Pages/Shoppages/ManageMenu";
import AddToCart from "./assets/Pages/UserPages/Cart";
import MyOrders from "./assets/Pages/UserPages/MyOrder";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/home" element={<UserHome />} />
        <Route path="/shop/home" element={<ShopHome />} />
        <Route path="/shop/create" element={<CreateShop />} />
        <Route path="/shop/dashboard" element={<ShopDashboard />} />
        <Route path="/shop/add-food" element={<AddFood />} />
        <Route path="/shop/food" element={<ManageMenu />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/checkorder" element={<MyOrders />} />
      </Routes>
    </>
  );
};

export default App;
