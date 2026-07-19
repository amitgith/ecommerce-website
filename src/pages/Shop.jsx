import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const {
    shopsData,
    setShopsData,
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
  } = useContext(MyStore);

  const getShopsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setShopsData(res.data);
    } catch (error) {
      console.log("Error in API", error);
    }
  };

  useEffect(() => {
    getShopsData();
  }, []);

  let filteredProducts = shopsData
    .filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      }

      if (sort === "high-low") {
        return b.price - a.price;
      }

      return 0;
    });

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Search + Filter + Sort */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-600 md:w-80"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
        </select>

        {/* Price Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-indigo-600"
        >
          <option value="default">Sort By Price</option>
          <option value="low-high">Price: Low to High</option>

          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Shop;
