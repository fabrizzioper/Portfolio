import React, { useState, useEffect } from 'react';

const TypewriterName = ({ isDark }) => {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Fabrizzio Pereira";
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  
  const nameStartIndex = "Hi, I'm ".length;

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
        timeoutId = setTimeout(startTyping, 2000);
      }
    };

    startTyping();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, [fullText]);

  return (
    <div className="transition-colors duration-2000">
      {/* Contenedor con altura fija */}
      <div className="h-40 sm:h-16 md:h-8"> {/* Ajusta estas alturas según necesites */}
        <h1 className="text-6xl font-bold whitespace-normal lg:whitespace-nowrap">
          {text.split('').map((char, index) => {
            const isNamePart = index >= nameStartIndex;

            return (
              <span 
                key={index}
                className={`transition-colors duration-2000 ${
                  isNamePart 
                    ? (isDark ? 'text-blue-300' : 'text-blue-700')
                    : (isDark ? 'text-white' : 'text-black')
                }`}
              >
                {char}
              </span>
            );
          })}
          <span 
            className={`inline-block w-1 h-12 ml-1 transition-colors duration-2000 ${
              showCursor && isTyping ? 'opacity-100' : 'opacity-0'
            } ${isDark ? 'bg-white' : 'bg-black'}`}
          >
          </span>
        </h1>
      </div>
    </div>
  );
};

export default TypewriterName;