import React from 'react';
import Header from './Header';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {title && (
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center animate-fade-in">
            {title}
          </h1>
        )}
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 lg:p-10 animate-slide-up">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Access Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Quick Access</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Most Valuable Players in the World
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Latest Transfers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Current Rumors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Current Market Value Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    FIFA World Ranking
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Involved Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Sponsors and Data Maintainers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Apply as a Sponsor or Data Maintainer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    11 Bids
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Found an Error?
                  </a>
                </li>
              </ul>
            </div>

            {/* Career and About Us Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Career</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Open Positions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <h3 className="text-lg font-bold text-white mt-6 mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    The TM Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-blue-200 transition-colors hover:translate-x-1 duration-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-200 hover:text-blue-200 transition-colors hover:scale-110 duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-blue-200 transition-colors hover:scale-110 duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-blue-200 transition-colors hover:scale-110 duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-blue-200 transition-colors hover:scale-110 duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-sm text-gray-300 animate-pulse">
              © {new Date().getFullYear()} Football Trophy Showcase. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Designed with ❤️ by Your Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;