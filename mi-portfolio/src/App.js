// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  // Aplicar o eliminar la clase 'dark' al <html> para habilitar el modo oscuro de Tailwind
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Hero isDark={isDark} />
    </div>
  );
};

export default App;
