import { useEffect, useMemo, useState } from "react";
import api_front from "../api_front";

export default function Home({ cart, setCart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    api_front
      .get("/home")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function addToCart(item) {
    setCart((last) => [...last, item]);
  }

  function removeFromCart(item) {
    setCart((last) => last.filter((cartItem) => cartItem.id !== item.id));
  }

  const isInCart = useMemo(
    () => (item) => cart.some((cartItem) => cartItem.id === item.id),
    [cart]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
      {data.map((items, index) => {
        return (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-full h-64 mb-4">
              <img
                src={`http://localhost:3700/image/${items.product_image}`}
                alt={items.product_image}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">{items.product_name}</p>
                <p className="text-lg font-bold text-green-600">
                  ₹{items.product_price}
                </p>
              </div>
              <p className="text-gray-600 mb-4">{items.description}</p>

              {items.available_status === "Available" ? (
                isInCart(items) ? (
                  <button
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                    onClick={() => removeFromCart(items)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-all"
                    onClick={() => addToCart(items)}
                  >
                    Order
                  </button>
                )
              ) : (
                <p className="text-red-600 font-semibold">Not Available</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
