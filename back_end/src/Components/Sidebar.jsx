import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-56 bg-teal-900 text-white  flex flex-col p-6">
      <div className="flex flex-col space-y-6 mt-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav className="flex flex-col space-y-4">
          <Link to="/items">
            <button className="w-full text-left py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
              Upload
            </button>
          </Link>
          <Link to="/order">
            <button className="w-full text-left py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
              Order
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
