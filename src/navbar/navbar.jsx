import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'education', label: 'Education' },
    { id: 'training', label: 'Training' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveTab]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          width: max-content;
          max-width: calc(100vw - 32px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar-pill {
          display: flex;
          align-items: center;
          gap: 3px;
          background: rgba(12, 12, 14, 0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          padding: 5px 6px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8),
                      0 0 0 1px rgba(255, 255, 255, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        .light-mode .navbar-pill {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(0, 0, 0, 0.12);
          box-shadow: 0 16px 32px -10px rgba(0, 0, 0, 0.15);
        }

        .nav-items-desktop {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-item-btn {
          background: transparent;
          border: none;
          outline: none;
          color: #a1a1aa;
          font-size: 13px;
          font-weight: 500;
          padding: 7px 14px;
          border-radius: 9999px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
        }

        .light-mode .nav-item-btn {
          color: #4b5563;
        }

        .nav-item-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .light-mode .nav-item-btn:hover {
          color: #111827;
          background: rgba(0, 0, 0, 0.06);
        }

        .nav-item-btn.active {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.16);
          font-weight: 600;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.25),
                      0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .light-mode .nav-item-btn.active {
          color: #000000;
          background: rgba(0, 0, 0, 0.1);
        }

        .theme-toggle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: #e4e4e7;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          margin-left: 4px;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .light-mode .theme-toggle {
          border-color: rgba(0, 0, 0, 0.15);
          background: rgba(0, 0, 0, 0.05);
          color: #1f2937;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
          transform: scale(1.08) rotate(12deg);
        }

        .mobile-hamburger {
          display: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .mobile-dropdown-menu {
          display: none;
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          width: 260px;
          background: rgba(14, 14, 18, 0.95);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 10px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          flex-direction: column;
          gap: 4px;
        }

        @media (max-width: 1080px) {
          .nav-items-desktop {
            display: none;
          }
          .mobile-hamburger {
            display: flex;
          }
          .mobile-dropdown-menu.open {
            display: flex;
          }
        }
      `}</style>

      <div className="navbar-container">
        <nav className="navbar-pill" aria-label="Main Navigation">
          <div className="nav-items-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item-btn ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </nav>

        <div className={`mobile-dropdown-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item-btn ${activeTab === item.id ? 'active' : ''}`}
              style={{ width: '100%', textAlign: 'left', borderRadius: '12px' }}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
