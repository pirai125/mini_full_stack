import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api_back from "../api_back";

export default function All() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(true);

  useEffect(() => {
    if (deleted) {
      setDeleted(false);
    }
    api_back
      .get("/items")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [deleted]);

  function deleteItem(id) {
    api_back
      .delete(`/delete/${id}`)
      .then((res) => {
        setDeleted(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Product Items</h1>
          <Link to="/create">
            <button className="bg-teal-500 hover:bg-teal-600 active:bg-teal-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">
              + Create
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="w-full border-separate border-spacing-0 border border-gray-300">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="py-3 px-4  text-left text-lg font-medium">
                  S.no
                </th>
                <th className="py-3 px-4 text-left text-lg font-medium">
                  Product Id
                </th>
                <th className="py-3 px-4 text-left text-lg font-medium">
                  Product Image
                </th>
                <th className="py-3 px-4 text-left text-lg font-medium">
                  Product Name
                </th>
                <th className="py-3 px-4 text-left text-lg font-medium">
                  Product Price
                </th>
                <th className="py-3 px-4 text-left text-lg font-medium">
                  Available
                </th>
                <th className="py-3 px-4 text-center text-lg font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4 text-gray-800">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-800">{items.p_id}</td>
                  <td className="py-3 px-4">
                    <img
                      src={`http://localhost:3700/image/${items.product_image}`}
                      alt={items.product_image}
                      className="w-20 h-20 object-cover rounded-md shadow-md"
                    />
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    {items.product_name}
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    ₹{items.product_price}
                  </td>
                  <td className="py-3 px-4 text-gray-800">
                    {items.available_status}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <Link to={`/read/${items.id}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300">
                          Preview
                        </button>
                      </Link>
                      <Link to={`/edit/${items.id}`}>
                        <button className="bg-green-600 hover:bg-green-700 active:bg-green-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300">
                          Edit
                        </button>
                      </Link>
                      <button
                        className="bg-red-600 hover:bg-red-700 active:bg-red-500 text-white font-semibold py-1 px-3 rounded-lg shadow-md transition duration-300"
                        onClick={() => deleteItem(items.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
