import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./assets/Pages/CommonPages/Signup";
import Login from "./assets/Pages/CommonPages/Login";
import Home from "./assets/Pages/CommonPages/Home";
import UserHome from "./assets/Pages/UserPages/UserHome";
import CreateShop from "./assets/Pages/Shoppages/CreateShop";
import ShopDashboard from "./assets/Pages/Shoppages/ShopDashboard";
import AddFood from "./assets/Pages/Shoppages/AddFood";
import ManageMenu from "./assets/Pages/Shoppages/ManageMenu";
import AddToCart from "./assets/Pages/UserPages/Cart";
import MyOrders from "./assets/Pages/UserPages/MyOrder";
import OurMenu from "./assets/Pages/UserPages/OurMenu";
import Menu from "./assets/Pages/UserPages/Menu";
import ShopLayout from "./assets/Pages/Shoppages/Shoplayout";
import OrderPages from "./assets/Pages/Shoppages/OrderPages";
import UserLayout from "./assets/Pages/UserPages/UserLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/user" element={<UserLayout />}>
          <Route path="home" element={<UserHome />} />
          <Route path="cart" element={<AddToCart />} />
          <Route path="checkorder" element={<MyOrders />} />
          <Route path="home/popular-food" element={<OurMenu />} />
          <Route path="menu" element={<Menu />} />
        </Route>

        <Route path="/shop" element={<ShopLayout />}>
          <Route path="create" element={<CreateShop />} />
          <Route path="dashboard" element={<ShopDashboard />} />
          <Route path="add-food" element={<AddFood />} />
          <Route path="food" element={<ManageMenu />} />
          <Route path="orders" element={<OrderPages />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
