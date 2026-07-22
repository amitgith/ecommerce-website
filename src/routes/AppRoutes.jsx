import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Layout from "../components/Common/Layout";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;