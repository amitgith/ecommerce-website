import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router";
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
} from "lucide-react";

const ProductDetail = () => {
  const { singleProductData, setSingleProductData } = useContext(MyStore);
  console.log(singleProductData);

  let { id } = useParams();

  let getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res);
      setSingleProductData(res.data);
    } catch (error) {
      console.log("Detail api error", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <p className="mb-8 text-sm text-gray-500">
          <NavLink className="cursor-pointer hover:text-indigo-800" to={"/"}>
            Home/
          </NavLink>
          <NavLink
            className="cursor-pointer hover:text-indigo-800"
            to={"/shop"}
          >
            Shop/
          </NavLink>
          <span className="font-medium text-indigo-600">
            {singleProductData.category}
          </span>
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Image */}
          <div className="rounded-2xl bg-white p-10 shadow-lg">
            <div className="flex /h-[500px] items-center justify-center overflow-hidden rounded-xl bg-gray-100">
              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="h-96 object-contain transition duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <span className="w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold capitalize text-indigo-600">
              {singleProductData.category}
            </span>

            {/* Title */}
            <h1 className="mt-5 text-4xl font-bold text-gray-800">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <span className="font-semibold text-gray-700">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            {/* Price */}
            <h2 className="mt-6 text-5xl font-bold text-indigo-600">
              ${singleProductData.price}
            </h2>

            {/* Description */}
            <p className="mt-6 leading-8 text-gray-600">
              {singleProductData.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer">
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button className="rounded-xl border border-gray-300 bg-white p-4 transition hover:bg-red-50 hover:text-red-500">
                <Heart size={22} />
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <Truck className="mx-auto text-indigo-600" size={24} />

                <h3 className="mt-3 font-semibold">Free Delivery</h3>

                <p className="text-sm text-gray-500">On Orders Above $50</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <ShieldCheck className="mx-auto text-indigo-600" size={24} />

                <h3 className="mt-3 font-semibold">Secure Payment</h3>

                <p className="text-sm text-gray-500">256-bit SSL</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <RotateCcw className="mx-auto text-indigo-600" size={24} />

                <h3 className="mt-3 font-semibold">Easy Returns</h3>

                <p className="text-sm text-gray-500">30 Days Return</p>
              </div>
            </div>

            {/* Next Product */}
            <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-semibold text-white transition hover:bg-indigo-700 cursor-pointer">
              Next Product
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
