import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import Footer from "./Components/Footer";
import {Route , Routes}from "react-router-dom"
export default function App() {
  const [cart , setCart] = useState([])
  const [order , setOrder] = useState({})
  return (
    <>
      <div className="bg-slate-200 font-sora ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/order"
            element={<Order order={order} setOrder={setOrder} />}
          />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}
