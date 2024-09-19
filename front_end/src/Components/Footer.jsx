import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between md:justify-start items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h1 className="text-2xl font-bold mb-4 ">
              Cafe Delight
            </h1>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-yellow-400">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-yellow-400">
                  Order
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-2">123 Cafe Street</p>
            <p className="mb-2">City, Country 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@cafe.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Cafe Delight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
