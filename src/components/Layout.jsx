import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Cart from "../pages/Cart";

const Layout = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Cart />
      <Outlet />
    </div>
  );
};

export default Layout;
