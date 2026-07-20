import React, { useState } from "react";

const Category = () => {
  // --- States ---
  const [userName, setUserName] = useState("amit!");

  // --- Analytics Data ---
  const [metrics, setMetrics] = useState([
    {
      id: 1,
      value: "0",
      title: "Cart Items",
      desc: "In your bag",
      iconColor: "text-[#bfff00]",
      svg: (
        <svg
          xmlns="http://w3.org"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m21 16-4 4-4-4" />
          <path d="M17 20V4" />
          <path d="m3 8 4-4 4 4" />
          <path d="M7 4v16" />
        </svg>
      ),
    },
    {
      id: 2,
      value: "$0.00",
      title: "Cart Value",
      desc: "Ready to checkout",
      iconColor: "text-indigo-400",
      svg: (
        <svg
          xmlns="http://w3.org"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: 3,
      value: "5",
      title: "Top Products",
      desc: "Highly rated",
      iconColor: "text-amber-400",
      svg: (
        <svg
          xmlns="http://w3.org"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      id: 4,
      value: "6",
      title: "Categories",
      desc: "To explore",
      iconColor: "text-purple-400",
      svg: (
        <svg
          xmlns="http://w3.org"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2H2v10h10V2z" />
          <path d="M22 12H12v10h10V12z" />
          <path d="M12 12H2v10h10V12z" />
          <path d="M22 2H12v10h10V2z" />
        </svg>
      ),
    },
  ]);

  // --- Categories Data ---
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", count: 17, emoji: "💻" },
    { id: 2, name: "Clothing", count: 2, emoji: "📦" },
    { id: 3, name: "Furniture", count: 3, emoji: "📦" },
    { id: 4, name: "Home", count: 14, emoji: "📦" },
    { id: 5, name: "Sports", count: 8, emoji: "📦" },
    { id: 6, name: "Accessories", count: 6, emoji: "📦" },
  ]);

  return (
    <div className="max-w-5xl mx-auto my-8 p-4 font-sans text-white selection:bg-[#bfff00] selection:text-black">
      {/* 1. TOP HERO SECTION PANEL */}
      <div
        className="relative p-10 md:p-14 bg-[#0d0d0d] border border-neutral-800 rounded-[24px] flex flex-col md:flex-row justify-between items-start md:items-center gap-10 overflow-hidden mb-6"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Left wrapper columns */}
        <div className="flex-1 max-w-xl">
          <div className="mb-5">
            <p className="text-[#bfff00] text-xs font-bold tracking-widest uppercase mb-3 flex items-center gap-1">
              Good Morning 👋
            </p>
            <div className="text-white text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Welcome back, <br />
              <span className="text-[#bfff00]">{userName}</span>
            </div>
          </div>

          <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
            Discover today's picks — hand-curated products across electronics,
            fashion, and more.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-[#bfff00] text-black text-sm font-semibold rounded-full hover:bg-[#a3db00] transition-colors duration-200">
              Shop Now
              <span className="text-lg leading-none">&rarr;</span>
            </div>
            <div className="cursor-pointer px-6 py-3 bg-transparent text-white text-sm font-semibold rounded-full border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 transition-colors duration-200">
              View All Products
            </div>
          </div>
        </div>

        {/* Right side floating tags blocks */}
        <div className="flex flex-row md:flex-col gap-4 w-full md:w-auto /min-w-[170px]">
          <div className="flex-1 md:flex-none flex flex-col justify-center items-center p-5 /h-[100px] bg-[#bfff00]/5 border border-[#bfff00]/10 rounded-2xl text-center">
            <span className="text-[#bfff00] text-2xl font-bold tracking-tight mb-1">
              20+
            </span>
            <span className="text-neutral-500 text-[10px] tracking-wide uppercase font-medium">
              Products Available
            </span>
          </div>

          <div className="flex-1 md:flex-none flex flex-col justify-center items-center p-5 /h-[100px] bg-transparent border border-neutral-800 rounded-2xl text-center">
            <span className="text-white text-2xl font-bold tracking-tight mb-1">
              Free
            </span>
            <span className="text-neutral-500 text-[10px] tracking-wide uppercase font-medium">
              Delivery on ₹999+
            </span>
          </div>
        </div>
      </div>

      {/* 2. ANALYTICS METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {metrics.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-5 bg-[#0d0d0d] border border-neutral-800 rounded-[20px] /h-[110px]"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 ${item.iconColor}`}
            >
              {item.svg}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight leading-none mb-1">
                {item.value}
              </span>
              <span className="text-neutral-400 text-xs font-medium">
                {item.title}
              </span>
              <span className="text-neutral-600 text-[11px] mt-0.5">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. CATEGORIES DISPLAY ROW SECTION */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl md:text-2xl font-bold tracking-tight">
            Shop by Category
          </div>
          <div className="cursor-pointer text-[#bfff00] text-sm font-semibold flex items-center gap-1 hover:underline">
            View All <span>&rarr;</span>
          </div>
        </div>

        {/* Categories Block Grid Wrapper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="cursor-pointer flex flex-col items-center justify-center p-6 bg-black border border-neutral-800 rounded-[20px] hover:border-neutral-600 transition-all duration-200 text-center group"
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-200">
                {cat.emoji}
              </span>
              <div className="text-sm font-semibold text-white tracking-wide">
                {cat.name}
              </div>
              <span className="text-neutral-500 text-xs mt-1">
                {cat.count} items
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
