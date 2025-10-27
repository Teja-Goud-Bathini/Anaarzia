import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP NAVBAR ROW */}
        <div className="flex items-center h-16 space-x-4">
          {/* LEFT: Logo / Brand */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="text-3xl">🐾</div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Anaarzia
            </span>
          </div>

          {/* CENTER: Search Bar (hidden on mobile) */}
          <div className="hidden md:flex flex-grow mx-4 relative">
            <input
              type="search"
              placeholder="Search for pet food, treats..."
              className="w-full p-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
            />
          </div>

          {/* RIGHT: Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 shrink-0">
            <div className="flex items-center">
              <span className="text-gray-700 font-medium mr-2">Deliver to:</span>
              <button className="text-orange-600 font-semibold flex items-center hover:text-orange-500 transition duration-300 py-2 px-4 rounded-lg border border-gray-300">
                Your Location
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex items-center space-x-4">
              <Link
                to="/restaurants"
                className="text-gray-700 hover:text-orange-600 transition duration-300"
              >
                Restaurants
              </Link>

              <Link
                to="/cart"
                className="flex items-center text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Cart
              </Link>

              <Link
                to="/login"
                className="flex items-center text-gray-700 hover:text-orange-600 transition duration-300"
              >
                <svg
                  className="w-6 h-6 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Sign In
              </Link>
            </nav>
          </div>

          {/* HAMBURGER MENU (visible only on mobile) */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ position: 'absolute', right: '1rem' }} // Positioning the hamburger menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <input
                type="search"
                placeholder="Search for pet food, treats..."
                className="w-full p-2 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
              />

              <Link
                to="/restaurants"
                className="text-gray-700 hover:text-orange-600 py-2"
              >
                Restaurants
              </Link>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-orange-600 py-2"
              >
                Cart
              </Link>
              <Link
                to="/login"
                className="text-gray-700 hover:text-orange-600 py-2"
              >
                Sign In
              </Link>

              <button className="text-orange-600 font-semibold flex items-center hover:text-orange-500 transition duration-300 py-2">
                Your Location
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
