import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import ProductPages from "./components/Products/ProductsPage";
import SingleProduct from "./components/Products/SingleProduct";
import CartPage from "./components/Cart/Cartpage";
import MyOrderPage from "./components/MyOrder/MyOrderPage";
import LoginPage from "./components/Authentication/LoginPage";
import SignupPage from "./components/Authentication/SignupPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductPages /> */}
        {/* <SingleProduct /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        {/* <LoginPage /> */}
        {/* <SignUpPage /> */}
        <SignupPage />
      </main>
    </div>
  );
};

export default App;
