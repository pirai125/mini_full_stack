import { useEffect, useState } from "react";
import api_back from "../api_back";

export default function Order() {
  const [data, setData] = useState([]);
  const [statuses, setStatuses] = useState({});

  const statusOptions = ["Shipped", "Delivered", "Cancelled"];

  function changeStatus(id, index, newStatus) {
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: newStatus,
    }));

    const updatedData = data.map((p) =>
      p.id === id ? { ...p, status: newStatus } : p
    );

    setData(updatedData);

    const updatedItem = updatedData[index];

    api_back
      .put(`/status/${id}`, updatedItem)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    localStorage.setItem(
      "statuses",
      JSON.stringify({ ...statuses, [id]: newStatus })
    );
  }

  useEffect(() => {
    api_back
      .get("/cartItems")
      .then((res) => {
        setData(res.data);
        const initialStatuses = {};
        res.data.forEach((item) => {
          initialStatuses[item.id] = item.status;
        });
        setStatuses(initialStatuses);
        localStorage.setItem("statuses", JSON.stringify(initialStatuses));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const storedStatuses = localStorage.getItem("statuses");
    if (storedStatuses) {
      setStatuses(JSON.parse(storedStatuses));
    }
  }, []);

  return (
    <div className="m-4 p-4 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Order Management
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="border-b px-3 py-2 text-left">S.no</th>
              <th className="border-b px-3 py-2 text-left">Product Id</th>
              <th className="border-b px-3 py-2 text-left">Product Name</th>
              <th className="border-b px-3 py-2 text-left">Product Price</th>
              <th className="border-b px-3 py-2 text-left">Quantity</th>
              <th className="border-b px-3 py-2 text-left">Time</th>
              <th className="border-b px-3 py-2 text-left">Order Status</th>
              <th className="border-b px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {data.map((items, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-300"
              >
                <td className="border-b px-3 py-2">{index + 1}</td>
                <td className="border-b px-3 py-2">{items.p_id}</td>
                <td className="border-b px-3 py-2">{items.p_name}</td>
                <td className="border-b px-3 py-2">{items.p_amount}</td>
                <td className="border-b px-3 py-2">{items.quantity}</td>
                <td className="border-b px-3 py-2">{items.time_stamp}</td>
                <td className="border-b px-3 py-2">{items.status}</td>
                <td className="border-b  py-2 ">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => changeStatus(items.id, index, status)}
                      className={`py-1 px-3 m-2 rounded-md text-white font-semibold ${
                        status === "Delivered"
                          ? "bg-blue-600 hover:bg-blue-500"
                          : status === "Shipped"
                          ? "bg-yellow-600 hover:bg-yellow-500"
                          : "bg-red-600 hover:bg-red-500"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
