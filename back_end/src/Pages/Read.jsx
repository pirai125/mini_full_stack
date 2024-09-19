import { useEffect, useState } from "react";
import api_back from "../api_back";
import { useParams, Link } from "react-router-dom";

export default function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api_back
      .get(`/read/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <Link to="/items">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
            Back
          </button>
        </Link>
      </div>
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Product ID: {item.p_id}
            </p>
            <Link to={`/edit/${item.id}`} className="ml-auto">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                Edit
              </button>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <img
              src={`http://localhost:3700/image/${item.product_image}`}
              alt={item.product_image}
              className="w-full lg:w-1/3 h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {item.product_name}
              </h2>
              <p className="text-xl font-semibold text-gray-600 mb-2">
                Price: ₹{item.product_price}
              </p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p
                className={`font-semibold ${
                  item.available_status === "Available"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Status: {item.available_status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
