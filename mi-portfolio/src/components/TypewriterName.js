// src/components/TypewriterName.js
import React, { useState, useEffect } from 'react';

const TypewriterName = ({ isDark }) => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Fabrizzio Pereira";
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeoutId;

    const startTyping = () => {
      setText('');
      setIsTyping(true);
      typeText(0);
    };

    const typeText = (index) => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        timeoutId = setTimeout(() => typeText(index + 1), 100);
      } else {
        setIsTyping(false);
        // Espera 2 segundos antes de reiniciar
        timeoutId = setTimeout(startTyping, 2000);
      }
    };

    // Inicia la escritura
    startTyping();

    // Efecto de parpadeo del cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-black'}`}>
      <h1 className="text-6xl font-bold whitespace-normal lg:whitespace-nowrap">
        {text.split('').map((char, index) => (
          <span key={index}>
            {char}
          </span>
        ))}
        <span 
          className={`inline-block w-1 h-12 ml-1 ${showCursor && isTyping ? 'opacity-100' : 'opacity-0'} ${isDark ? 'bg-white' : 'bg-black'}`}
        >
        </span>
      </h1>
    </div>
  );
};

export default TypewriterName;
