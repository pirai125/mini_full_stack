import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import api_front from "../api_front";

export default function Cart({ cart, setCart, setOrder }) {
  const [total, setTotal] = useState(0);
  const deliveryFee = cart.length * 5;
  const navigate = useNavigate()

  useEffect(() => {
    const updateCart = cart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCart((prevCart) => {
      if (JSON.stringify(prevCart) !== JSON.stringify(updateCart)) {
        return updateCart;
      }
      return prevCart;
    });
  }, [cart, setCart]);

  useEffect(() => {
    const itemTotal = cart.reduce(
      (total, item) => total + item.product_price * item.quantity,
      0
    );
    setTotal(itemTotal);
  }, [cart]);

  function addQuantity(item) {
    const incQuantity = cart.map((prev) =>
      prev.id === item.id ? { ...prev, quantity: prev.quantity + 1 } : prev
    );
    setCart(incQuantity);
  }

  function subQuantity(item) {
    const decQuantity = cart.map((prev) =>
      prev.id === item.id && prev.quantity > 1
        ? { ...prev, quantity: prev.quantity - 1 }
        : prev
    );
    setCart(decQuantity);
  }

  function remove(item) {
    setCart((prev) => prev.filter((p) => p.id !== item.id));
  }

  function placeOrder(e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert(
        "Your cart is empty. Please add items to the cart before placing an order."
      );
      return;
    }
    
    api_front
      .post("/order", cart)
      .then((res) => {
        setOrder(cart);
        navigate("/order")
        console.log(res);
      })
      .catch((err) => console.log(err));
    setCart([]);
  }

  return (
    <>
      <div className="container mx-auto p-6 md:p-8 bg-gray-50 min-h-screen">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Item
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Title
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Price
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Quantity
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Total
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>{cart.length === 0 ?  
                <tr className="border-b-2"><td colSpan="6"><p className="my-5 sm:my-10 text-center ">No items in the Cart</p></td></tr>: 
              (cart.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-4">
                    <img
                      src={`http://localhost:3700/image/${item.product_image}`}
                      alt={item.product_name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    {item.product_name}
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    ₹{item.product_price}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full transition"
                        onClick={() => addQuantity(item)}
                      >
                        +
                      </button>
                      <p className="border border-gray-300 px-4 py-1 rounded text-gray-800">
                        {item.quantity}
                      </p>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full transition"
                        onClick={() => subQuantity(item)}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    ₹{item.quantity * item.product_price}
                  </td>
                  <td className="px-4 py-4">
                    <button
                      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded-full transition"
                      onClick={() => remove(item)}
                    >
                      x
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-3 border-b pb-2">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">₹{total}</p>
            </div>
            <div className="flex justify-between mb-3 border-b pb-2">
              <p className="font-semibold">Delivery Fee</p>
              <p className="font-semibold">₹{deliveryFee}</p>
            </div>
            <div className="flex justify-between mb-4 border-b pb-2">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">₹{total + deliveryFee}</p>
            </div>

            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full transition"
              onClick={placeOrder}
              >
              Place Order
            </button>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-lg mb-4">Have a promo code? Enter it here:</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Promo code"
                className="border border-gray-300 rounded-l-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 transition">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
