import React from "react";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const WelcomeBanner = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning 👋";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon 👋";
    } else if (hour >= 17 && hour < 24) {
      return "Good Evening 👋";
    } else {
      return "Good Night 🌙";
    }
  };

  const greeting = getGreeting();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div
        className="
        relative
        overflow-hidden
        rounded-3xl
        bg-[#0f0f0f]
        p-5
        sm:p-8
        lg:p-12
        border
        border-white
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Side */}

          <div className="w-full lg:w-2/3">
            <p className="flex items-center gap-2 text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-4">
              <ShoppingBag size={16} />
              {greeting}
            </p>

            <h1
              className="
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              "
            >
              Welcome Back,
              <br />
              <span className="text-indigo-400">{currentUser?.fullname}</span>
            </h1>

            <p
              className="
            mt-5
            max-w-xl
            text-neutral-400
            text-sm
            sm:text-base
            leading-7
            "
            >
              Discover today's best products from Electronics, Fashion,
              Jewellery and more. Enjoy premium quality with exciting offers.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <NavLink to="/shop">
                <button
                  className="
                  w-full
                  sm:w-auto
                  bg-indigo-400
                  cursor-pointer
                  text-black
                  px-6
                  py-3
                  rounded-full
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-indigo-300
                  duration-300
                  "
                >
                  Shop Now
                  <ArrowRight size={18} />
                </button>
              </NavLink>

              <NavLink to="/shop">
                <button
                  className="
                  w-full
                  sm:w-auto
                  border
                  cursor-pointer
                  border-neutral-700
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:bg-neutral-900
                  duration-300
                  "
                >
                  View All Products
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right Side */}

          <div
            className="
            grid
            grid-cols-2
            lg:grid-cols-1
            gap-3
            w-full
            sm:w-auto
            "
          >
            {/* Products Card */}

            <div
              className="
              w-full
              sm:w-35
              lg:w-45
              rounded-2xl
              border
              border-indigo-400/20
              bg-indigo-400/5
              p-4
              sm:p-5
              text-center
              "
            >
              <h2
                className="
              text-3xl
              sm:text-4xl
              font-bold
              text-indigo-400
              "
              >
                20+
              </h2>

              <p
                className="
              text-[10px]
              sm:text-xs
              text-neutral-400
              uppercase
              tracking-wider
              mt-2
              "
              >
                Products
              </p>
            </div>

            {/* Delivery Card */}

            <div
              className="
              w-full
              sm:w-35
              lg:w-45
              rounded-2xl
              border
              border-neutral-700
              bg-neutral-900
              p-4
              sm:p-5
              text-center
              "
            >
              <h2
                className="
              text-2xl
              sm:text-3xl
              font-bold
              text-white
              "
              >
                Free
              </h2>

              <p
                className="
              text-[10px]
              sm:text-xs
              text-neutral-400
              uppercase
              tracking-wider
              mt-2
              "
              >
                Delivery ₹999+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
