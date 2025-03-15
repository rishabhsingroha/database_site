import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { 
  Flag, 
  Award, 
  Users, 
  User, 
  Trophy
} from 'lucide-react';

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/admin', label: 'Countries', icon: <Flag size={18} /> },
    { path: '/admin/leagues', label: 'Leagues', icon: <Award size={18} /> },
    { path: '/admin/teams', label: 'Teams', icon: <Users size={18} /> },
    { path: '/admin/players', label: 'Players', icon: <User size={18} /> },
    { path: '/admin/trophies', label: 'Trophies', icon: <Trophy size={18} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <nav>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                        location.pathname === item.path
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          
          {/* Main content */}
          <main className="flex-1 bg-white rounded-lg shadow-md p-6">
            {children}
          </main>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Football Trophy Showcase Admin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AdminLayout;