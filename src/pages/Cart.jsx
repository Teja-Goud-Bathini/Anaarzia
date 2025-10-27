import React, { useState } from "react";
import cartData from "../data/cart";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function Cart() {
  const [cartItems, setCartItems] = useState(cartData);

  const handleIncrease = (index) => {
    const updated = [...cartItems];
    updated[index].quantity += 1;
    setCartItems(updated);
  };

  const handleDecrease = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    } else {
      updated.splice(index, 1);
    }
    setCartItems(updated);
  };

  const handleRemove = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 40;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Cart Content */}
      <main className="flex-1 flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto w-full">
        {/* Items */}
        <div className="flex-1 bg-white shadow-md rounded-2xl p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg">
              Your cart is empty.
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4 last:border-none"
                >
                  {/* Image */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => handleDecrease(index)}
                          className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleIncrease(index)}
                          className="bg-gray-200 hover:bg-gray-300 p-1 rounded-full"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="text-right">
                    <p className="text-gray-800 font-semibold text-lg">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 mt-1"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-1/3 h-fit bg-white shadow-lg rounded-2xl p-6 sticky top-8 self-start">
            <h2 className="text-2xl font-bold mb-4 border-b pb-3">
              Order Summary
            </h2>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl shadow-md transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </main>

    
    </div>
  );
}
