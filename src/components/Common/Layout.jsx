import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;