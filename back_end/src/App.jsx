import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import All from "./Pages/All";
import Order from "./Pages/Order";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";
import Read from "./Pages/Read";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/items" element={<All />} />
            <Route path="/order" element={<Order />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/read/:id" element={<Read />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
