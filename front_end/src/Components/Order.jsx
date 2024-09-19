import { useEffect, useState } from "react";
import api_front from "../api_front";

export default function Order() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api_front
      .get("/cartItems")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Shipped":
        return "bg-blue-100 text-blue-600";
      case "Delivered":
        return "bg-green-100 text-green-600";
      case "Cancelled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-10 px-4 sm:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            Your Orders
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium">
                    Product Name
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium">
                    Quantity
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 text-sm font-medium">
                    Order Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((items, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white hover:bg-gray-100 transition duration-150"
                    >
                      <td className="px-4 py-4 border-b border-gray-200 text-gray-800">
                        {items.p_name}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-200 text-gray-800">
                        {items.quantity}
                      </td>
                      <td className="px-4 py-4 border-b border-gray-200">
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(
                            items.status
                          )}`}
                        >
                          {items.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
