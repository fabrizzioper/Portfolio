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
    { text: 'Inicio', href: '#' },
    { text: 'Productos', href: '#' },
    { text: 'Servicios', href: '#' },
    { text: 'Contacto', href: '#' }
  ];

  return (
    <div className={`fixed w-full top-0 left-0 z-50 ${isDark ? 'dark' : ''}`}>
      <div className="px-4 py-4">
        <nav className={`
          max-w-7xl mx-auto rounded-full transition-all duration-300 ease-in-out
          ${hasScrolled 
            ? isDark 
              ? 'bg-gradient-to-r from-gray-900/95 via-blue-900/95 to-purple-900/95 backdrop-blur-sm shadow-lg' 
              : 'bg-gradient-to-r from-blue-100/95 via-blue-50/95 to-purple-50/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
          }
        `}>
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <span className={`font-bold text-xl ${hasScrolled 
                  ? isDark 
                    ? 'text-white' 
                    : 'text-gray-800'
                  : 'text-white'}`}>
                  Logo
                </span>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      className={`
                        px-4 py-2 rounded-full transition-all duration-300 ease-in-out
                        ${hasScrolled 
                          ? isDark
                            ? 'text-gray-300 hover:text-white'
                            : 'text-gray-600 hover:text-gray-900'
                          : 'text-white hover:text-gray-200'
                        }
                      `}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className={`
                    p-2 rounded-full transition-all duration-300 ease-in-out
                    ${hasScrolled 
                      ? isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                    }
                  `}
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`
                    md:hidden p-2 rounded-full transition-all duration-300 ease-in-out
                    ${hasScrolled 
                      ? isDark
                        ? 'text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                    }
                  `}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className={`
          md:hidden fixed left-0 right-0 px-4 transition-all duration-300 ease-in-out transform
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}>
          <div className={`
            mt-2 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out
            ${isDark ? 'bg-gray-800' : 'bg-white'}
          `}>
            {menuItems.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className={`
                  block px-4 py-3 text-center transition-all duration-300 ease-in-out
                  ${isDark
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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
