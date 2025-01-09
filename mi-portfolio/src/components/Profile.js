// src/components/Profile.js
import React from 'react';
import TypewriterName from './TypewriterName';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Profile = ({ isDark }) => {
  return (
    <div id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Capa de Gradiente Oscuro */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'
          }`}
      ></div>

      {/* Capa de Gradiente Claro */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-200 to-purple-200 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'
          }`}
      ></div>

      {/* Contenido Principal */}
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-24 lg:py-28 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-12 md:space-y-16 text-center lg:text-left transition-all duration-500">
            {/* Integración del componente TypewriterName */}
            <TypewriterName isDark={isDark} />

            <p className={`text-2xl md:text-3xl ${isDark ? 'text-white' : 'text-gray-800'} font-medium transition-colors duration-500 ease-in-out`}>
              Full Stack Developer
            </p>

            <div className="block lg:hidden animate-float my-16">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute -inset-8 rounded-full aura-gradient opacity-75 animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src={require('../assets/images/foto.png')}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 animate-slide-up"
                  />
                </div>
              </div>
            </div>

            <p className={`text-xl ${isDark ? 'text-gray-200' : 'text-gray-700'} max-w-2xl mx-auto px-2 sm:px-0 md:px-0 lg:mx-0`}>
            Estudiante de Ingeniería de Software apasionado por la innovación y el aprendizaje continuo, 
            con habilidades en trabajo en equipo y comunicación.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 animate-bounce-in">
              {/* Botón de Descargar CV como enlace */}
              <a
                href="public/CV_FabrizzioPereira.pdf" // Ruta al CV en la carpeta public
                download
                className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all hover:scale-110 ${isDark
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-blue-700 hover:bg-blue-600 text-white shadow-lg'
                  } animate-shake-hover`}
              >
                <Download size={24} />
                Descargar CV
              </a>
            </div>

            <div className="flex gap-8 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/fabrizzioper' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/fabrizzioper' },
                { icon: Mail, href: 'mailto:fabrizzioper@gmail.com' }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-3xl transition-colors duration-500 ease-in-out hover:scale-125 animate-bounce-hover ${isDark
                      ? 'text-white hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={32} />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block order-1 lg:order-2 animate-float">
            <div className="relative w-96 h-96 ml-40 mb-8">
              <div className="absolute -inset-8 rounded-full aura-gradient opacity-75 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={require('../assets/images/foto.png')}
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 animate-slide-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>
        {`
          .aura-gradient {
            background: radial-gradient(
              circle at center,
              rgba(139, 92, 246, 0.5) 0%,
              rgba(96, 165, 250, 0.5) 25%,
              rgba(147, 51, 234, 0.5) 50%,
              rgba(79, 70, 229, 0.3) 75%,
              transparent 100%
            );
            filter: blur(20px);
            transform: scale(1.2);
          }

          .typing-text {
            display: inline-block;
            position: relative;
            white-space: nowrap;
            overflow: hidden;
          }

          .typing-text::after {
            content: '';
            position: absolute;
            right: -4px;
            top: 50%;
            transform: translateY(-50%);
            height: 70%;
            width: 2px;
            background-color: ${isDark ? '#fff' : '#000'};
            animation: cursor-blink 0.7s infinite;
          }

          @keyframes cursor-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          .animate-slide-up {
            opacity: 0;
            animation: slideUp 1s ease-out forwards;
          }

          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-bounce-in {
            animation: bounceIn 0.7s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
          }

          @keyframes bounceIn {
            0% {
              transform: scale(0.3);
              opacity: 0;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.8;
            }
            70% { transform: scale(0.9); }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-shake-hover:hover {
            animation: shake 0.5s ease-in-out;
          }

          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }

          .animate-bounce-hover:hover {
            animation: bounce 0.5s ease-in-out;
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .animate-pulse-slow {
            animation: pulse-scale 2.2s ease-in-out infinite;
          }

          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(0.9);
              opacity: 0.75;
            }
            50% {
              transform: scale(1.1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
