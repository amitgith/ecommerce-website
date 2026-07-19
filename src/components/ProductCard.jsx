import React from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div
        onClick={() => navigate(`/detail/${product.id}`)}
        className="relative h-64 bg-gray-100 p-6"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />

        <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
          {product.category}
        </span>

        <h2 className="mt-4 line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm text-gray-600">{product.rating.rate}</span>

            <span className="text-sm text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <h3 className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </h3>
        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
