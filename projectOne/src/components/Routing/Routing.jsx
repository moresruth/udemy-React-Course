import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Home/HomePage";
import ProductPages from "../Products/ProductsPage";
import SingleProduct from "../Products/SingleProduct";
import CartPage from "../Cart/Cartpage";
import MyOrderPage from "../MyOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from "../Authentication/SignupPage";
import LogOut from "../Authentication/LogOut";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPages />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/myorders" element={<MyOrderPage />} />
      <Route path="/logout" element={<LogOut />} />
    </Routes>
  );
};

export default Routing;
