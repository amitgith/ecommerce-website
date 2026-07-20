import React, { useContext } from "react";
import {
  ShoppingCart,
  DollarSign,
  Star,
  Grid2x2,
} from "lucide-react";
import { MyStore } from "../../context/MyContext";

const StatCards = () => {
  const { cartItems, shopsData } = useContext(MyStore);
  const { setCategory } = useContext(MyStore);
  

  // Total Cart Items
  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  // Total Cart Value
  const cartValue = cartItems
    .reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    )
    .toFixed(2);

  // Top Rated Products (4.5+ Rating)
  const topProducts =
    shopsData?.filter((item) => item.rating?.rate >= 4.5).length || 0;

  // Unique Categories
  const categories =
    [...new Set(shopsData?.map((item) => item.category) || [])].length;

  const stats = [
    {
      title: "Cart Items",
      value: cartCount,
      description: "Products currently in your cart.",
      icon: ShoppingCart,
      color: "lime",
    },
    {
      title: "Cart Value",
      value: `$${cartValue}`,
      description: "Ready for checkout.",
      icon: DollarSign,
      color: "indigo",
    },
    {
      title: "Top Products",
      value: topProducts,
      description: "Highest rated products.",
      icon: Star,
      color: "yellow",
    },
    {
      title: "Categories",
      value: categories,
      description: "Browse product categories.",
      icon: Grid2x2,
      color: "purple",
    },
  ];

  const colors = {
    lime: {
      icon: "text-lime-400",
      bg: "bg-lime-400/10",
      border: "hover:border-lime-400/40",
    },
    indigo: {
      icon: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "hover:border-indigo-500/40",
    },
    yellow: {
      icon: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/40",
    },
    purple: {
      icon: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "hover:border-purple-500/40",
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const style = colors[stat.color];

        return (
          <div
            key={stat.title}
            className={`rounded-2xl border border-neutral-800 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${style.border}`}
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <div className={`${style.bg} p-3 rounded-xl`}>
                <Icon className={style.icon} size={22} />
              </div>

              <span className="text-3xl font-bold text-white">
                {stat.value}
              </span>
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white">
                {stat.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-400">
                {stat.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatCards;