import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Home, Briefcase, User, LogIn, LogOut } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      setUser(null);
    } else {
      navigate('/login');
    }
  };

  const navItems = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <Briefcase size={20} />, label: "Projects", path: "/projects" },
    { icon: <User size={20} />, label: "About", path: "/about" }
  ];

  return (
    <aside className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-800
  ${isExpanded ? 'w-64' : 'w-16'} sm:w-16 ${isExpanded ? 'fixed' : 'relative'}`}>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-10 top-4 p-2 rounded-r-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800"
      >
        <Menu className="h-5 w-5 text-gray-800 dark:text-gray-200" />
      </button>


      <div className="p-4 flex items-center justify-center">
        <Link to="/" className="text-gray-800 dark:text-white text-2xl font-semibold">
          {isExpanded ? 'MyDevSite' : 'M'}
        </Link>
      </div>


      <nav className="flex-1">
        <ul className="px-2 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-3 rounded-lg transition-all duration-300 w-full
                  ${location.pathname === item.path
                    ? 'bg-blue-600/80 text-white'
                    : 'text-gray-800 hover:bg-white/20 dark:text-gray-100 dark:hover:bg-gray-800/50'}
                  ${isExpanded ? 'justify-start' : 'justify-center'}`}
              >
                {item.icon}
                {isExpanded && (
                  <span className="ml-4 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      <div className="p-4">
        <button
          onClick={handleAuthAction}
          className={`flex items-center px-3 py-2 rounded-lg transition-all duration-300
            text-gray-800 hover:bg-white/20 dark:text-gray-100 dark:hover:bg-gray-800/50
            ${isExpanded ? 'w-full' : 'justify-center w-10 mx-auto'}`}
        >
          {user ? <LogOut size={20} /> : <LogIn size={20} />}
          {isExpanded && (
            <span className="ml-4 whitespace-nowrap">
              {user ? "Sign Out" : "Sign In"}
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
