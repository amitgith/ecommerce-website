import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Store } from "lucide-react";
import { MyStore } from "../../context/MyContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { cartItems, setIsCartOpen } = useContext(MyStore);

  const [scrolled, setScrolled] = useState(false);

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart Count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/20 transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-xl" : "bg-black"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-4">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* ================= Logo ================= */}

          <div className="flex items-center justify-center lg:justify-start gap-2">
            <Store size={30} className="text-indigo-600" />

            <h1 className="text-2xl font-bold text-indigo-600">SkyMart</h1>
          </div>

          {/* ================= Navigation ================= */}

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-10 text-gray-300 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600"
                  : "transition hover:text-indigo-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600"
                  : "transition hover:text-indigo-600"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600"
                  : "transition hover:text-indigo-600"
              }
            >
              About
            </NavLink>
          </div>

          {/* ================= Right Section ================= */}

          <div
            className="
  flex
  w-full
  lg:w-auto
  items-center
  justify-center
  lg:justify-end
  gap-2
  sm:gap-3
  "
          >
            {/* User */}

            <div
              className="
    flex
    items-center
    gap-2
    rounded-xl
    border
    border-white/20
    bg-white/10
    px-3
    py-2
    "
            >
              <div
                className="
      flex
      h-6
      w-6
      items-center
      justify-center
      rounded-md
      bg-indigo-500
      text-xs
      font-bold
      text-white
      "
              >
                {currentUser?.fullname?.charAt(0).toUpperCase()}
              </div>

              <span
                className="
      hidden
      sm:block
      text-sm
      font-medium
      text-white
      "
              >
                {currentUser?.fullname}
              </span>
            </div>

            {/* Cart */}

            <button
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="
    relative
    flex
    h-10
    w-10
    cursor-pointer
    items-center
    justify-center
    rounded-xl
    border
    border-white/20
    bg-white/10
    "
            >
              <ShoppingCart
                size={22}
                className="
      text-white
      transition
      hover:text-indigo-600
      "
              />

              {cartCount > 0 && (
                <span
                  className="
        absolute
        -right-1
        -top-2
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

                toast.success("You've been logged out successfully. 👋");

                navigate("/login");
              }}
              className="
    flex
    h-10
    w-10
    cursor-pointer
    items-center
    justify-center
    rounded-xl
    border
    border-white/20
    bg-white/10
    text-white
    transition
    hover:bg-white/20
    "
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
