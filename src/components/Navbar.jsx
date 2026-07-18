import React from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Store } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Store className="text-indigo-600" size={28} />
        <h1 className="text-2xl font-bold text-indigo-600">SkyMart</h1>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "hover:text-indigo-600 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "hover:text-indigo-600 transition"
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold"
              : "hover:text-indigo-600 transition"
          }
        >
          About
        </NavLink>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        <span className="font-medium text-gray-700">
          Hi, {currentUser?.fullname}
        </span>

        <button className="relative cursor-pointer">
          <ShoppingCart className="text-gray-700 hover:text-indigo-600 transition" />
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
