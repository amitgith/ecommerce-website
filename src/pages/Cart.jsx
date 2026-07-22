import React, { useContext, useEffect } from "react";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyContext";

const Cart = () => {
  const { cartItems, isCartOpen, setIsCartOpen, setCartItems } =
    useContext(MyStore);
  console.log("Cart Status:", isCartOpen);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );

    setCartItems(updatedCart);
  };
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
  };
  useEffect(() => {
    if (cartItems.length === 0) {
      setIsCartOpen(false);
    }
  }, [cartItems]);
  const clearCart = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    alert("🎉 Order Placed Successfully!");

    setCartItems([]);

    setIsCartOpen(false);
  };
  return (
    <>
      {/* Overlay */}

      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Drawer */}

      <div
        className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-5  bg-[#111111db] ">
          <div className="flex items-center gap-3">
            <ShoppingCart size={28} className="text-indigo-600" />

            <h1 className="text-2xl font-bold text-white">Shopping Cart</h1>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="rounded-lg p-2 transition hover:bg-gray-100 text-white"
          >
            <X />
          </button>
        </div>

        {/* Body */}

        <div className="h-[calc(100vh-220px)] overflow-y-auto p-5 bg-black">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <ShoppingCart size={70} className="text-white" />

              <h2 className="mt-5 text-2xl font-bold">Your Cart is Empty</h2>

              <p className="mt-2 text-white">
                Add products to start shopping.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="mb-5 rounded-xl border p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-lg object-contain bg-gray-100 p-2"
                  />

                  <div className="flex flex-1 flex-col justify-between text-white">
                    <div>
                      <h2 className="line-clamp-2 font-semibold">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-xl font-bold text-indigo-600">
                        ${item.price}
                      </p>
                    </div>

                    {/* Quantity */}

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-3 rounded-lg border px-3 py-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="rounded-md p-1 hover:bg-indigo-100"
                        >
                          <Minus size={18} />
                        </button>

                        <span className="font-semibold">{item.quantity}</span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="rounded-md p-1 hover:bg-indigo-100"
                        >
                          <Plus size={18} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}

        {/* Footer */}

        <div className="absolute bottom-0 w-full border-t bg-white p-5">
          <div className="mb-2 flex justify-between">
            <span>Total Items</span>

            <span className="font-semibold">{totalItems}</span>
          </div>

          <div className="mb-5 flex justify-between text-xl font-bold">
            <span>Total</span>

            <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Clear Cart */}

          <button
            onClick={clearCart}
            className="
    mb-3
    w-full
    cursor-pointer
    rounded-xl
    border
    border-red-500
    py-3
    font-semibold
    text-red-500
    transition
    hover:bg-red-500
    hover:text-white
    "
          >
            Clear Cart
          </button>

          {/* Checkout */}

          <button
            onClick={handleCheckout}
            className="
    w-full
    cursor-pointer
    rounded-xl
    bg-indigo-600
    py-4
    font-semibold
    text-white
    transition
    hover:bg-indigo-700
    "
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
