import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { ShoppingCart, LogOut, Store, Menu, X } from "lucide-react";
import { MyStore } from "../../context/MyContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { cartItems, setIsCartOpen, scrolled, setScrolled } =
    useContext(MyStore);

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
      <div
        className="
      mx-auto 
      max-w-7xl 
      px-4 
      sm:px-6 
      lg:px-8 
      xl:px-12 
      py-4
      "
      >
        <div
          className="
        flex 
        items-center 
        justify-between 
        gap-10
        relative
        "
        >
          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            flex
            md:hidden
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/20
            bg-white/10
            text-white
            "
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* ================= LOGO ================= */}

          <div
            className="
            flex
            items-center
            gap-2

            absolute
            left-1/2
            -translate-x-1/2

            md:static
            md:translate-x-0
            "
          >
            <Store size={30} className="text-amber-600" />

            <h1
              className="
            text-2xl
            font-bold
            text-amber-600
            "
            >
              SkyMart
            </h1>
          </div>

          {/* ================= NAVIGATION ================= */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-12
            text-gray-300
            font-medium
            mx-auto
            "
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-amber-600" : "transition hover:text-amber-600"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-amber-600" : "transition hover:text-amber-600"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-amber-600" : "transition hover:text-amber-600"
              }
            >
              About
            </NavLink>
          </div>

          {/* ================= RIGHT SECTION ================= */}

          <div
            className="
            flex
            items-center
            gap-3
            "
          >
            {/* User */}

            <div
              className="
              hidden
              sm:flex
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
                bg-amber-500
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
              lg:block
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
                hover:text-amber-600
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
                  bg-amber-600
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

                toast.success("You've been logged out successfully 👋");

                navigate("/login");
              }}
              className="
              hidden
              sm:flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-white/10
              text-white
              hover:bg-white/20
              transition
              "
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}

        {menuOpen && (
          <div
            className="
            md:hidden
            mt-5
            flex
            flex-col
            gap-5
            rounded-xl
            border
            border-white/20
            bg-black/90
            p-5
            text-gray-300
            font-medium
            "
          >
            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/"
              className="hover:text-amber-600"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/shop"
              className="hover:text-amber-600"
            >
              Shop
            </NavLink>

            <NavLink
              onClick={() => setMenuOpen(false)}
              to="/about"
              className="hover:text-amber-600"
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
