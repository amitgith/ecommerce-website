import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Cart from "../pages/Cart";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Outlet />
    </div>
  );
};

export default Layout;
