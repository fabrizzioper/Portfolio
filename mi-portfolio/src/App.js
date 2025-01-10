// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Studies from './components/Studies'; // <-- Importa tu Studies
import Experience from './components/Experience';  // Importa el nuevo componente

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

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
      <Profile isDark={isDark} />

      {/* Aquí incluyes tu componente Studies con la misma prop isDark */}
      <Studies isDark={isDark} />
<Experience isDark={isDark} /> 
    </div>
  );
};

 export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Profile from './components/Profile';
// import Studies from './components/Studies';
// import Experience from './components/Experience';  // Importa el nuevo componente

// const App = () => {
//   const [isDark, setIsDark] = useState(true);

//   const toggleDarkMode = () => {
//     setIsDark(prev => !prev);
//   };

//   useEffect(() => {
//     if (isDark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <div className={`transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
//       <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
//       <Profile isDark={isDark} />
//         {/* Añade el componente Experience */}
//       <Studies isDark={isDark} />
//       <Experience isDark={isDark} />
//     </div>
//   );
// };

// export default App;