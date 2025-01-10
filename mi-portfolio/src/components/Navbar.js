// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Inicio', href: '#inicio' },
    { text: 'Competencias', href: '#competencias' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className={`fixed w-full top-0 left-0 z-50 ${isDark ? 'dark' : ''}`}>
      <div className="px-4 py-3">
        <nav
          className={`
            max-w-6xl mx-auto rounded-full transition-all duration-300 ease-in-out
            ${hasScrolled
              ? isDark
                ? 'bg-gradient-to-r from-gray-900/85 via-blue-900/85 to-purple-900/85 backdrop-blur-sm shadow-lg'
                : 'bg-gradient-to-r from-blue-300/85 via-blue-200/85 to-purple-200/85 backdrop-blur-sm shadow-lg'
              : 'bg-transparent'
            }
          `}
        >
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-700'}`}>
                  Portfolio
                </span>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                        ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-600'}`}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className={`transition-all duration-300 ease-in-out
                    ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-600'}`}
                >
                  {isDark ? <Sun size={24} /> : <Moon size={22} />}
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`md:hidden transition-all duration-300 ease-in-out
                    ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-600'}`}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Menú móvil */}
        <div
          className={`
            md:hidden fixed left-0 right-0 px-4
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
          `}
        >
          <div
            className={`
              mt-2 rounded-lg shadow-lg overflow-hidden
              ${
                isDark
                  ? 'bg-gradient-to-r from-gray-900/85 via-blue-900/85 to-purple-900/85 backdrop-blur-sm'
                  : 'bg-gradient-to-r from-blue-300/85 via-blue-200/85 to-purple-200/85 backdrop-blur-sm'
              }
            `}
          >
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className={`
                  block px-4 py-3 text-center transition-all duration-300 ease-in-out
                  ${
                    isDark
                      ? 'text-white hover:bg-gray-700/50 hover:text-gray-300'
                      : 'text-gray-700 hover:bg-gray-200/50 hover:text-gray-600'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;











