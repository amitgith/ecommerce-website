import React from "react";
import {
  ShoppingBag,
  ArrowRight,
  ShoppingCart,
  DollarSign,
  Star,
  Grid2x2,
} from "lucide-react";

const WelcomeBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-[#0f0f0f] p-6 sm:p-8 lg:p-12"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="w-full lg:w-2/3">
            <p className="flex items-center gap-2 text-lime-400 font-semibold uppercase tracking-widest text-sm mb-4">
              <ShoppingBag size={16} />
              Good Morning 👋
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Welcome Back,
              <br />
              <span className="text-lime-400">Amit!</span>
            </h1>

            <p className="mt-6 max-w-xl text-neutral-400 text-sm sm:text-base leading-7">
              Discover today's best products from Electronics, Fashion,
              Jewellery and more. Enjoy premium quality with exciting offers.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto bg-lime-400 text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-lime-300 duration-300">
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button className="w-full sm:w-auto border border-neutral-700 text-white px-6 py-3 rounded-full hover:bg-neutral-900 duration-300">
                View All Products
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full /lg:w-[220px]">
            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6 text-center">
              <h2 className="text-4xl font-bold text-lime-400">20+</h2>
              <p className="text-xs text-neutral-400 uppercase tracking-wider mt-2">
                Products
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-700 bg-neutral-900 p-6 text-center">
              <h2 className="text-3xl font-bold text-white">Free</h2>
              <p className="text-xs text-neutral-400 uppercase tracking-wider mt-2">
                Delivery ₹999+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {/* Card 1 */}
        <div className="rounded-2xl border border-neutral-800 bg-[#111111] p-6 hover:border-lime-400/40 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="bg-lime-400/10 p-3 rounded-xl">
              <ShoppingCart className="text-lime-400" size={22} />
            </div>

            <span className="text-3xl font-bold text-white">0</span>
          </div>

          <h3 className="mt-5 text-white font-semibold">Cart Items</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Products currently in your cart.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-neutral-800 bg-[#111111] p-6 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="bg-indigo-500/10 p-3 rounded-xl">
              <DollarSign className="text-indigo-400" size={22} />
            </div>

            <span className="text-3xl font-bold text-white">$0</span>
          </div>

          <h3 className="mt-5 text-white font-semibold">Cart Value</h3>

          <p className="text-sm text-neutral-400 mt-1">Ready for checkout.</p>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl border border-neutral-800 bg-[#111111] p-6 hover:border-yellow-500/40 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="bg-yellow-500/10 p-3 rounded-xl">
              <Star className="text-yellow-400" size={22} />
            </div>

            <span className="text-3xl font-bold text-white">5</span>
          </div>

          <h3 className="mt-5 text-white font-semibold">Top Products</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Highest rated products.
          </p>
        </div>

        {/* Card 4 */}
        <div className="rounded-2xl border border-neutral-800 bg-[#111111] p-6 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="bg-purple-500/10 p-3 rounded-xl">
              <Grid2x2 className="text-purple-400" size={22} />
            </div>

            <span className="text-3xl font-bold text-white">6</span>
          </div>

          <h3 className="mt-5 text-white font-semibold">Categories</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Browse product categories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;
