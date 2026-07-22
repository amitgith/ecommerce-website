import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../../context/MyContext";

const RelatedProducts = ({ category, currentId }) => {
  const navigate = useNavigate();

  const { cartItems, setCartItems, setIsCartOpen } = useContext(MyStore);

  const [relatedProducts, setRelatedProducts] = useState([]);

  const getRelatedProducts = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`,
      );

      const filteredProducts = res.data.filter(
        (item) => item.id !== Number(currentId),
      );

      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.log("Related Products Error:", error);
    }
  };

  useEffect(() => {
    if (category) {
      getRelatedProducts();
    }
  }, [category, currentId]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }

    setIsCartOpen(true);
  };

  return (
    <section className="bg-black py-4">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Related Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map((product) => {
            const isAdded = cartItems.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-44 object-contain transition duration-300 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 bg-[#0f0f0f]">
                  <span className="inline-block rounded-full bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 capitalize">
                    {product.category}
                  </span>

                  <h3 className="mt-4 text-white font-semibold line-clamp-2 h-12">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(Math.round(product.rating.rate))].map(
                      (_, index) => (
                        <Star
                          key={index}
                          size={15}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ),
                    )}

                    <span className="text-sm text-white ml-2">
                      ({product.rating.count})
                    </span>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <h2 className="text-2xl font-bold text-indigo-600">
                      ${product.price}
                    </h2>

                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={isAdded}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-white font-medium transition ${
                        isAdded
                          ? "bg-green-600 cursor-not-allowed"
                          : "bg-indigo-600 hover:bg-indigo-700"
                      }`}
                    >
                      <ShoppingCart size={16} />
                      {isAdded ? "Added" : "Add"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
