
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-9xl font-display font-bold text-blue-500 mb-4">404</h1>
        <p className="text-2xl text-gray-800 mb-8">Oops! Page not found</p>
        <p className="text-gray-500 mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 py-3 px-6 rounded-lg transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
