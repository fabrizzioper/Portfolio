import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ data, position, isDark }) => {
  const getTransformStyles = () => {
    switch (position) {
      case 'prev':
        return 'translate-x-[-35%] scale-90 opacity-50 z-10';
      case 'next':
        return 'translate-x-[35%] scale-90 opacity-50 z-10';
      case 'current':
        return 'translate-x-0 scale-100 opacity-100 z-20';
      default:
        return 'opacity-0 scale-75 z-0';
    }
  };

  const mainCardClasses = `
    w-[90vw] 
    md:w-[750px] 
    min-h-[350px] 
    max-h-[95vh]
    overflow-y-visible
    md:overflow-y-auto
    mx-auto 
    rounded-lg 
    shadow-md 
    p-4 
    md:p-6 
    ${isDark
      ? 'bg-gray-900/90 md:bg-gray-900/50 text-white md:hover:bg-gray-900/90 '
      : 'bg-white/40 text-gray-800 md:hover:bg-white/95 md:hover:bg-white/60'
    }
    flex 
    flex-col 
    justify-between
    backdrop-blur-none
    md:backdrop-blur-sm
    transform
    transition-all
    duration-300
    ease-in-out
  `;

  return (
    <div className={`absolute inset-0 transition-all duration-700 ease-in-out backdrop-blur-sm md:backdrop-blur-none ${getTransformStyles()}`}>
      <div className={mainCardClasses}>
        <div className="mb-4">
          <h2 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {data.company}
          </h2>
          <h3 className={`text-base font-medium transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            {data.role}
          </h3>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-sm mb-4 gap-2">
          <div className="flex items-center gap-2">
            <MapPin size={16} className={`transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{data.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className={`transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-500'}`} />
            <span className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{data.period}</span>
          </div>
        </div>

        <div>
          <h4 className={`text-base font-medium mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Responsabilidades Principales
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.responsibilities.map((resp, index) => (
              <div
                key={index}
                className={`
                  rounded-xl p-4 
                  transform
                  transition-all duration-300 ease-in-out 
                  hover:-translate-y-1
                  ${isDark
                    ? 'bg-gray-800/50 md:hover:bg-gray-700/50 md:hover:shadow-lg md:hover:shadow-white/10'
                    : 'bg-gray-300/30 md:hover:bg-white md:hover:shadow-lg md:hover:shadow-blue-500/40'
                  }
                  ${index >= 3 ? 'hidden md:block' : ''}
                `}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <i className="fas fa-code text-white text-sm"></i>
                </div>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {resp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCarousel = ({ isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [positions, setPositions] = useState([]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const getPrevIndex = (index) => (index === 0 ? experiences.length - 1 : index - 1);
    const getNextIndex = (index) => (index === experiences.length - 1 ? 0 : index + 1);

    const newPositions = experiences.map((_, index) => {
      if (index === currentIndex) return 'current';
      if (index === getPrevIndex(currentIndex)) return 'prev';
      if (index === getNextIndex(currentIndex)) return 'next';
      return '';
    });

    setPositions(newPositions);
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));

  const onTouchStartHandler = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMoveHandler = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <div
      id="experiencia"
      className={`
        relative
        min-h-screen
        pt-20 md:pt-6
        overflow-hidden
        flex flex-col
        justify-center
        items-center
        transition-all duration-300 ease-in-out
        scroll-mt-[25px] md:scroll-mt-24
        pb-8 md:pb-0
      `}
    >
      {/* Gradiente de fondo oscuro */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-br from-green-900 via-blue-900 to-cyan-800
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* Gradiente de fondo claro */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-br from-yellow-100 via-blue-200 to-green-200
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `}
      />

      <main className="relative z-10 w-full max-w-6xl px-4 sm:px-4 md:px-4">
        <section className="space-y-8">
          <h2
            className={`
              text-2xl font-bold mb-6 px-2 sm:px-0
              transition-colors duration-300 ease-in-out
              ${isDark ? 'text-white' : 'text-gray-800'}
            `}
          >
            Experiencia
          </h2>

          <div
            className="w-full max-w-4xl h-[100vh] md:h-[450px] relative flex items-center justify-center mx-auto"
            ref={carouselRef}
            onTouchStart={onTouchStartHandler}
            onTouchMove={onTouchMoveHandler}
            onTouchEnd={onTouchEndHandler}
          >
            <div className="relative w-full h-full">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  data={exp}
                  position={positions[index]}
                  isDark={isDark}
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className={`
                absolute left-6 top-1/2 -translate-y-1/2 
                p-2 rounded-full 
                transition-all duration-300 ease-in-out 
                backdrop-blur-sm 
                group z-30 hidden md:block
                transform hover:scale-105
                ${isDark
                  ? 'bg-white/10 hover:bg-white/20 border border-white/10'
                  : 'bg-white/40 hover:bg-white/50 border border-white/20'
                }
              `}
            >
              <ChevronLeft size={16} className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-700'}`} />
            </button>

            <button
              onClick={nextSlide}
              className={`
                absolute right-6 top-1/2 -translate-y-1/2 
                p-2 rounded-full 
                transition-all duration-300 ease-in-out 
                backdrop-blur-sm 
                group z-30 hidden md:block
                transform hover:scale-105
                ${isDark
                  ? 'bg-white/10 hover:bg-white/20 border border-white/10'
                  : 'bg-white/40 hover:bg-white/50 border border-white/20'
                }
              `}
            >
              <ChevronRight size={16} className={`transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-700'}`} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

const experiences = [
  {
    company: "Native Lab",
    role: "Desarrollador Web Junior",
    location: "Lima - Comas, Perú",
    period: "Julio 2024 – diciembre 2024",
    responsibilities: [
      "Diseñé el maquetado de aplicaciones web frontend utilizando Angular, Bootstrap y Tailwind, mejorando la experiencia del usuario y la compatibilidad con múltiples dispositivos.",
      "Desarrollé servicios backend con Java y Spring Boot, implementando APIs, gestionando la lógica en diferentes proyectos.",
      "Trabajé con bases de datos relacionales utilizando SQL Server y MySQL, diseñando consultas para integrarlas con servicios backend desarrollados en SpringBoot",
      "Participé activamente en la resolución de desafíos técnicos, colaborando en equipo para proponer soluciones innovadoras que mejoraron la funcionalidad de los proyectos."
    ]
  },
  {
    company: "DRGT Perú",
    role: "Asistente de Sistemas",
    location: "Lima, Perú",
    period: "Enero 2024 - junio 2024",
    responsibilities: [
      "Brindé soporte técnico en hardware y software, asegurando respuestas rápidas y efectivas a los problemas de los usuarios internos.",
      "Realicé mantenimiento preventivo y correctivo de sistemas y equipos, garantizando su operatividad continua.",
      "Gestioné y resolví incidencias técnicas, aplicando conocimientos de troubleshooting para asegurar el funcionamiento óptimo de las plataformas de software.",
      "Colaboré en la configuración y administración de redes para reforzar la seguridad y estabilidad del sistema informático."
    ]
  },
  {
    company: "Vanels Sport Store",
    role: "Área de Ventas y Publicidad Digital",
    location: "Lima, Perú",
    period: "Marzo 2023 - diciembre 2023",
    responsibilities: [
      "Elaboré y analicé reportes de ventas mensuales para apoyar la toma de decisiones estratégicas.",
      "Monitoreé y evalué constantemente el desempeño del equipo de ventas, proporcionando recomendaciones para alcanzar los objetivos establecidos.",
      "Coordiné estrategias de publicidad digital para mejorar la visibilidad de los productos y atraer nuevos clientes, utilizando redes sociales.",
      "Creé contenido visual y textual para redes sociales y plataformas de venta en línea, optimizando el alcance y mejorando la conversión de ventas."
    ]
  }
];

export default ExperienceCarousel;