import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    <p className="text-9xl font-serif font-bold text-gray-100">404</p>
    <h1 className="font-serif font-bold text-2xl text-gray-900 -mt-4 mb-2">
      Page Not Found
    </h1>
    <p className="text-gray-400 text-sm max-w-sm mb-6">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 bg-emerald-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-emerald-800 transition-colors"
    >
      <FaHome /> Go Back Home
    </Link>
  </div>
);

export default NotFoundPage;