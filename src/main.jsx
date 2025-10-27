import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Restaurants from "./pages/Restaurants.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";
import Login from "./pages/LoginSignup.jsx";
import Cart from "./pages/Cart.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="restaurant/:id" element={<RestaurantDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1 className="p-6 text-2xl">404 - Page Not Found</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
