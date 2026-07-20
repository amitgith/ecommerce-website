import React from "react";
import { Link } from "react-router";
import { ShoppingBag, Package, Users, Star, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <Link
          to="/"
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CCFF00] text-black shadow-lg transition duration-300 hover:scale-105"
        >
          <ShoppingBag size={30} />
        </Link>

        <h2 className="mt-8 text-4xl font-bold md:text-5xl">
          About <span className="text-[#CCFF00]">SkyMart</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-gray-400 leading-8">
          SkyMart is your trusted online shopping destination, offering premium
          products with fast delivery, secure payments, and excellent customer
          service.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-neutral-800 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]">
            <Package className="mx-auto text-[#CCFF00]" size={32} />
            <h3 className="mt-5 text-4xl font-bold">20K+</h3>
            <p className="mt-2 text-gray-400">Products</p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]">
            <Users className="mx-auto text-[#CCFF00]" size={32} />
            <h3 className="mt-5 text-4xl font-bold">50K+</h3>
            <p className="mt-2 text-gray-400">Customers</p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]">
            <Star className="mx-auto text-[#CCFF00]" size={32} />
            <h3 className="mt-5 text-4xl font-bold">4.9</h3>
            <p className="mt-2 text-gray-400">Rating</p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-[#181818] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]">
            <Truck className="mx-auto text-[#CCFF00]" size={32} />
            <h3 className="mt-5 text-4xl font-bold">99%</h3>
            <p className="mt-2 text-gray-400">On-Time Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
