import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Home, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Trophy size={32} className="text-yellow-400" />
          <span className="text-3xl font-extrabold font-poppins tracking-tight">
            Trophy Showcase
          </span>
        </Link>

        {/* Navigation Section */}
        <nav>
          <ul className="flex space-x-8 items-center">
            <li>
              <Link
                to="/"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Home size={20} className="text-blue-200" />
                <span className="text-lg font-semibold font-roboto">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={isAdmin ? "/" : "/admin"}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Settings size={20} className="text-blue-200" />
                <span className="text-lg font-semibold font-roboto">
                  {isAdmin ? "View Site" : "Admin"}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;