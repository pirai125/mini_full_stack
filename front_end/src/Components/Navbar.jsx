import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-white text-2xl font-bold tracking-wide">
          <h1 className="hover:text-yellow-200 transition-all duration-200">
            Cafe Delight
          </h1>
        </div>
        <div className="list-none flex space-x-8 text-lg">
          <Link
            to="/"
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            <li>Home</li>
          </Link>
          <Link
            to="/cart"
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            <li>Cart</li>
          </Link>
          <Link
            to="/order"
            className="text-white font-medium hover:text-yellow-300 transition duration-300"
          >
            <li>Order</li>
          </Link>
        </div>
      </div>
    </div>
  );
}
