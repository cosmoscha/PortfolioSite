import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Home, Briefcase, User, LogIn, LogOut } from 'lucide-react';
import { styles } from '../styles/common';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <>
      {isMobile && isExpanded && (
        <div
          className={styles.sidebar.overlay}
          onClick={() => setIsExpanded(false)}
        />
      )}

      <aside className={`
        ${styles.sidebar.base}
        ${styles.sidebar.container}
        ${isExpanded ? styles.sidebar.expanded : styles.sidebar.collapsed}
        ${isMobile ? styles.sidebar.mobile : styles.sidebar.fixed}
      `}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.sidebar.toggleButton.wrapper}
        >
          <Menu className={styles.sidebar.toggleButton.icon} />
        </button>

        <div className={styles.sidebar.header.container}>
          <Link to="/" className={styles.sidebar.header.text}>
            {isExpanded ? 'MyDevSite' : 'M'}
          </Link>
        </div>

        <nav className="flex-1">
          <ul className={styles.sidebar.nav.list}>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`
                    ${styles.sidebar.nav.item.base}
                    ${location.pathname === item.path
                      ? styles.sidebar.nav.item.active
                      : styles.sidebar.nav.item.inactive}
                    ${isExpanded
                      ? styles.sidebar.nav.item.expanded
                      : styles.sidebar.nav.item.collapsed}
                  `}
                >
                  {React.cloneElement(item.icon, {
                    className: styles.sidebar.nav.item.icon
                  })}
                  {isExpanded && (
                    <span className={styles.sidebar.nav.item.text}>
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.sidebar.auth.container}>
          <button
            onClick={handleAuthAction}
            className={`
              ${styles.sidebar.auth.button.base}
              ${isExpanded
                ? styles.sidebar.auth.button.expanded
                : styles.sidebar.auth.button.collapsed}
            `}
          >
            {user ? (
              <LogOut className={styles.sidebar.auth.button.icon} />
            ) : (
              <LogIn className={styles.sidebar.auth.button.icon} />
            )}
            {isExpanded && (
              <span className={styles.sidebar.auth.button.text}>
                {user ? "Sign Out" : "Sign In"}
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;