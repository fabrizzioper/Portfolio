// src/hooks/useDarkMode.js
import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detectar la preferencia inicial del usuario
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    // Escuchar cambios en la preferencia del sistema
    const handleChange = (e) => {
      setIsDark(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const newIsDark = !prev;
      if (newIsDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newIsDark;
    });
  };

  return [isDark, toggleDarkMode];
};

export default useDarkMode;
