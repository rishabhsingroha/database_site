import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { Flag, Award, Users, User, Trophy } from "lucide-react";

const navItems = [
  { path: "/admin", label: "Countries", icon: Flag },
  { path: "/admin/leagues", label: "Leagues", icon: Award },
  { path: "/admin/teams", label: "Teams", icon: Users },
  { path: "/admin/players", label: "Players", icon: User },
  { path: "/admin/trophies", label: "Trophies", icon: Trophy },
];

const AdminLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="container mx-auto flex-1 px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <nav aria-label="Admin navigation">
              <ul className="space-y-2">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `flex items-center space-x-2 p-2 rounded-md transition-colors ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "hover:bg-gray-100 text-gray-700"
                        }`
                      }
                      aria-current={({ isActive }: { isActive: boolean }) =>
                        isActive ? "page" : undefined
                      }
                    >
                      <Icon size={18} />
                      <span>{label}</span>
                    </NavLink>
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Football Trophy Showcase Admin. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
//big fix
export default AdminLayout;
