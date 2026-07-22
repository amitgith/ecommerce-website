import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import {
  ShoppingCart,
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import RelatedProducts from "../components/Shopping/RelatedProducts";

const ProductDetail = () => {
  const {
    singleProductData,
    setSingleProductData,
    cartItems,
    setCartItems,
    setIsCartOpen,
  } = useContext(MyStore);

  const navigate = useNavigate();
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  const getSingleProductData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail API Error:", error);
    }
  };

  useEffect(() => {
    getSingleProductData();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const handleAddToCart = () => {
    const existing = cartItems.find((item) => item.id === singleProductData.id);

    if (existing) {
      const updated = cartItems.map((item) =>
        item.id === singleProductData.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );

      setCartItems(updated);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...singleProductData,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  const isAdded = cartItems.some((item) => item.id === singleProductData.id);

  return (
    <div className="min-h-screen bg-black py-5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <p className="mb-5 text-sm text-gray-500">
          <NavLink to="/" className="hover:text-indigo-600">
            Home /
          </NavLink>

          <NavLink to="/shop" className="hover:text-indigo-600 ml-1">
            Shop /
          </NavLink>

          <span className="ml-1 font-semibold text-indigo-600 capitalize">
            {singleProductData.category}
          </span>
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Product Image */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="bg-gray-100 rounded-xl h-105 flex items-center justify-center overflow-hidden">
              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="h-72 object-contain hover:scale-105 transition duration-300"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <span className="w-fit bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full font-semibold capitalize">
              {singleProductData.category}
            </span>

            <h1 className="text-3xl font-bold leading-tight text-white">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-2">
              <div className="flex">
                {[
                  ...Array(Math.round(singleProductData.rating?.rate || 0)),
                ].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="font-semibold text-white">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            <h2 className="text-4xl font-bold text-indigo-600 mt-2">
              ${singleProductData.price}
            </h2>

            <div className="mt-2">
              <p className="text-gray-600 leading-7">
                {showMore
                  ? singleProductData.description
                  : `${singleProductData.description?.slice(0, 100)}...`}
              </p>

              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-2 text-indigo-600 font-semibold hover:underline"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex flex-1 items-center justify-center cursor-pointer gap-3 rounded-xl py-3 font-semibold text-white transition ${
                  isAdded
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                <ShoppingCart size={20} />
                {isAdded ? "Added" : "Add to Cart"}
              </button>

              <button className="rounded-xl border border-gray-300 text-white bg-black p-4 hover:bg-red-50 hover:text-red-500 transition">
                <Heart size={22} />
              </button>
            </div>

            {/* Features */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-gray-200 bg-black text-white p-5 text-center shadow-sm">
                <Truck className="mx-auto text-indigo-600" size={24} />
                <h3 className="mt-3 font-semibold">Free Delivery</h3>
                <p className="text-sm text-gray-500">On Orders Above $50</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-black text-white p-5 text-center shadow-sm">
                <ShieldCheck className="mx-auto text-indigo-600" size={24} />
                <h3 className="mt-3 font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-500">256-bit SSL</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-black text-white p-5 text-center shadow-sm">
                <RotateCcw className="mx-auto text-indigo-600" size={24} />
                <h3 className="mt-3 font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-500">30 Days Return</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {/* Previous Product */}
              <button
                onClick={() => {
                  const prevId = Number(id) === 1 ? 20 : Number(id) - 1;
                  navigate(`/product/${prevId}`);
                }}
                className="flex items-center cursor-pointer justify-center gap-2 rounded-xl border border-indigo-600 bg-gray-600 py-4 font-semibold text-white hover:bg-indigo-50 transition"
              >
                <ArrowLeft size={20} />
                Previous Product
              </button>

              {/* Next Product */}
              <button
                onClick={() => {
                  const nextId = Number(id) === 20 ? 1 : Number(id) + 1;
                  navigate(`/product/${nextId}`);
                }}
                className="flex items-center cursor-pointer justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white hover:bg-indigo-700 transition"
              >
                Next Product
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={singleProductData.category} currentId={id} />
    </div>
  );
};

export default ProductDetail;
