import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Store } from "lucide-react";
import { MyStore } from "../../context/MyContext";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { cartItems, setIsCartOpen } = useContext(MyStore);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      className="
      sticky top-0 z-50
      flex items-center justify-between
      bg-black
      px-90
      py-4
      border-b border-white/30
      shadow-md
      "
    >
      {/* Logo */}

      <div className="flex items-center gap-2">
        <Store size={30} className="text-indigo-600" />

        <h1
          className="
          text-2xl
          font-bold
          text-indigo-600
          "
        >
          SkyMart
        </h1>
      </div>

      {/* Navigation */}

      <div
        className="
        flex
        items-center
        gap-10
        text-gray-300
        font-medium
        "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : "hover:text-indigo-600 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : "hover:text-indigo-600 transition"
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-indigo-600" : "hover:text-indigo-600 transition"
          }
        >
          About
        </NavLink>
      </div>

      {/* Right Section */}

      <div
        className="
        flex
        items-center
        gap-5
        bg-white/10
        border border-white/20
        rounded-xl
        px-4
        py-2
        "
      >
        {/* User Name */}

        <span
          className="
          text-white
          font-medium
          "
        >
          Hi, {currentUser?.fullname}
        </span>

        {/* Cart Button */}

        <button
          onClick={() => setIsCartOpen(true)}
          className="
          relative
          cursor-pointer
          "
        >
          <ShoppingCart
            size={26}
            className="
            text-white
            hover:text-indigo-600
            transition
            "
          />

          {cartCount > 0 && (
            <span
              className="
                absolute
                -top-3
                -right-3
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-indigo-600
                text-xs
                font-bold
                text-black
                "
            >
              {cartCount}
            </span>
          )}
        </button>

        {/* Logout */}

        <button
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
          className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-red-500
          px-4
          py-2
          text-white
          transition
          hover:bg-red-600
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
