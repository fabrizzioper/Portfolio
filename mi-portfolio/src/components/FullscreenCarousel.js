import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';

const ExperienceCard = ({ data, position }) => {
  const getTransformStyles = () => {
    switch (position) {
      case 'prev':
        return '-translate-x-[35%] scale-90 opacity-50 z-10';
      case 'next':
        return 'translate-x-[35%] scale-90 opacity-50 z-10';
      case 'current':
        return 'translate-x-0 scale-100 opacity-100 z-20';
      default:
        return 'opacity-0 scale-75 z-0';
    }
  };

  const mainCardClasses =
    'w-[750px] min-h-[350px] h-auto mx-auto rounded-lg shadow-md p-6 bg-white flex flex-col justify-between'; // Ancho aumentado, altura reducida

  return (
    <div
      className={`   absolute inset-0 transition-all duration-700 ease-in-out ${getTransformStyles()}`}
    >


      {/* Background Element */}


      <div className={mainCardClasses}>


        {/* Título */}
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">{data.company}</h2>
          <h3 className="text-base font-medium text-blue-600">{data.role}</h3>
        </div>

        {/* Información de ubicación y periodo */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-500" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-500" />
            <span>{data.period}</span>
          </div>
        </div>

        {/* Responsabilidades */}
        <div>
          <h4 className="text-base font-medium text-gray-800 mb-4">Responsabilidades Principales</h4>
          <div className="grid grid-cols-2 gap-4">
            {data.responsibilities.map((resp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <i className="fas fa-code text-white text-sm"></i>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
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

const FullscreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [positions, setPositions] = useState([]);

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

  return (
    <section className="relative h-screen w-full bg-[#111827] flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-4xl h-[450px] relative flex items-center justify-center">
        <div className="relative w-full h-full">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} data={exp} position={positions[index]} />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm group z-30"
        >
          <ChevronLeft size={16} className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 backdrop-blur-sm group z-30"
        >
          <ChevronRight size={16} className="text-white" />
        </button>
      </div>
    </section>
  );
};




export default FullscreenCarousel;

const experiences = [
  {
    company: "Native Lab",
    role: "Desarrollador Web Junior",
    location: "Lima - Comas, Perú",
    period: "Julio 2024 - Actualidad",
    responsibilities: [
      "Desarrollo aplicaciones web frontend utilizando Angular y React, mejorando la usabilidad y la experiencia del usuario.",
      "Implemento interfaces responsive utilizando Bootstrap, HTML, CSS y JavaScript y TypeScript, asegurando la compatibilidad con múltiples dispositivos.",
      "Contribuyo a la mejora de funcionalidades web, optimizando tiempos de carga y la accesibilidad.",
      "Participo activamente en reuniones de equipo, aportando ideas y proponiendo soluciones innovadoras para desafíos de desarrollo."
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
      "Coordiné estrategias de publicidad digital para mejorar la visibilidad de los productos y atraer nuevos clientes, utilizando herramientas como Google Ads y redes sociales.",
      "Creé contenido visual y textual para redes sociales y plataformas de venta en línea, optimizando el alcance y mejorando la conversión de ventas."
    ]
  }
]; 