import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Layout from "../components/Layout";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
