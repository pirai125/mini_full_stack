import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_back from "../api_back";

export default function Create() {
  const [data, setData] = useState({
    p_id: "",
    product_name: "",
    product_price: "",
    description: "",
    available_status: "Available",
    product_image: null,
  });
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("p_id", data.p_id);
    formData.append("product_name", data.product_name);
    formData.append("product_price", data.product_price);
    formData.append("description", data.description);
    formData.append("available_status", data.available_status);
    if (data.product_image) {
      formData.append("product_image", data.product_image);
    }

    api_back
      .post("/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        navigate("/items");
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <Link to="/items">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-6">
          Back
        </button>
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Create New Product</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product ID:
                <input
                  type="number"
                  min="1000"
                  name="product_id"
                  required
                  onChange={(e) => setData({ ...data, p_id: e.target.value })}
                  className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Name:
                <input
                  type="text"
                  name="product_name"
                  required
                  onChange={(e) =>
                    setData({ ...data, product_name: e.target.value })
                  }
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
                  required
                  onChange={(e) =>
                    setData({ ...data, product_price: e.target.value })
                  }
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
                      required
                      onChange={(e) =>
                        setData({ ...data, available_status: e.target.value })
                      }
                      className="form-radio text-teal-600"
                    />
                    <span className="ml-2 text-gray-800">Available</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="available_status"
                      value="Not Available"
                      required
                      onChange={(e) =>
                        setData({ ...data, available_status: e.target.value })
                      }
                      className="form-radio text-red-600"
                    />
                    <span className="ml-2 text-gray-800">Not Available</span>
                  </label>
                </div>
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Product Image:
                <input
                  type="file"
                  name="product_image"
                  required
                  onChange={(e) =>
                    setData({ ...data, product_image: e.target.files[0] })
                  }
                  className="border border-gray-300 p-2 rounded-lg w-full mt-1"
                />
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Description:
                <textarea
                  name="description"
                  required
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
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
      </div>
    </div>
  );
}
