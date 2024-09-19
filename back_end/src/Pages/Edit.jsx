import { useEffect, useState } from "react";
import api_back from "../api_back";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Edit() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api_back
      .get(`/read/${id}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    api_back
      .put(`/update/${id}`, data)
      .then((res) => {
        navigate("/items");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <Link to="/items">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
            Back
          </button>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
        {data && (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Product Name:
                  <input
                    type="text"
                    name="product_name"
                    value={data.product_name}
                    required
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Product Price:
                  <input
                    type="number"
                    min="1"
                    name="product_price"
                    value={data.product_price}
                    required
                    onChange={handleChange}
                    className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                  />
                </label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Status:
                  <div className="flex items-center mt-1">
                    <label className="flex items-center mr-6">
                      <input
                        type="radio"
                        name="available_status"
                        value="Available"
                        checked={data.available_status === "Available"}
                        required
                        onChange={handleChange}
                        className="form-radio text-teal-600"
                      />
                      <span className="ml-2 text-gray-800">Available</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="available_status"
                        value="Not Available"
                        checked={data.available_status === "Not Available"}
                        required
                        onChange={handleChange}
                        className="form-radio text-red-600"
                      />
                      <span className="ml-2 text-gray-800">Not Available</span>
                    </label>
                  </div>
                </label>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description:
                  <textarea
                    name="description"
                    value={data.description}
                    required
                    onChange={handleChange}
                    rows="4"
                    className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                  />
                </label>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
