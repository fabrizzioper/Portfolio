import React, { useState } from 'react';
import { Github, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import image_vanels_1 from '../assets/images/img1.png';
import image_vanels_2 from '../assets/images/img2.png';
import image_vanels_3 from '../assets/images/img3.png';
import image_vanels_4 from '../assets/images/img4.png';
import image_redes_1 from '../assets/images/img1_redes.png';
import image_redes_2 from '../assets/images/img2_redes.png';
import image_redes_3 from '../assets/images/img3_redes.png';




const Proyects = ({ isDark }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Sistema de Gestión de Inventario",
      description: "Aplicación web que optimiza la gestión de inventario de productos mediante el uso de inteligencia artificial para el registro automatico mediante el codigo de producto, ademas de permitir a los usuarios gestionar el inventario de manera eficiente.",
      technologies: ["Python", "HTML", "CSS", "Bootstrap", "JavaScript", "Flask", "MySQL"],
      githubUrl: "https://github.com/fabrizzioper/Sistema_Inventario_Vanels",
      liveUrl: "https://github.com/fabrizzioper/Sistema_Inventario_Vanels",
      images: [
        image_vanels_1,
        image_vanels_2,
        image_vanels_3,
        image_vanels_4,
      ],
    },
    {
      title: "Optimización de la Red de Internet en Lima",
      description: "Este proyecto es una aplicación web que busca optimizar la distribución de la red de internet en Lima. Esta permite visualizar y gestionar datos relacionados con distritos, utiliza nodos y conexiones utilizando el algoritmo de dijkstra para encontrar el camino mas corto, para mejorar la infraestructura de la red.",
      technologies: ["Django", "Python","SQLite", "HTML", "CSS", "JavaScript", "Boostrap"],
      githubUrl: "https://github.com/fabrizzioper/Optimizacion-Red-Internet",
      liveUrl: "https://github.com/fabrizzioper/Optimizacion-Red-Internet",
      images: [
        image_redes_1,
        image_redes_2,
        image_redes_3,
      ],
    },
  ];

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      (prev + 1) % selectedProject.images.length
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const ProjectCard = ({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    images
  }) => (
    <div
      className={`
        rounded-2xl p-6 flex flex-col backdrop-blur-sm
        transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-500/40
        ${isDark ? 'bg-gray-900/50 text-white hover:bg-gray-800/50' : 'bg-white/40 text-gray-800 hover:bg-white/60'}
        2xl:p-4
        min-h-[450px]
      `}
    >
      <div
        className="w-full h-60 md:h-72 overflow-hidden rounded-md mb-4 cursor-pointer"
        onClick={() => handleImageClick({ title, images })}
      >
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <h3
        className={`
          text-center font-bold mb-2 transition-colors duration-500 ease-in-out
          ${isDark ? 'text-white' : 'text-gray-800'}
        `}
      >
        {title}
      </h3>

      <p
        className={`
          text-sm text-justify leading-relaxed mb-4 transition-colors duration-500 ease-in-out
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}
      >
        {description}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`
              px-2 py-1 rounded-md text-xs transition-colors duration-500 ease-in-out
              ${isDark ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-50 text-blue-600'}
            `}
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex justify-center gap-5 pt-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-1 text-sm font-medium transition-colors duration-500 ease-in-out
            ${isDark ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}
          `}
        >
          <Github size={16} />
          Code
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center gap-1 text-sm font-medium transition-colors duration-500 ease-in-out
            ${isDark ? 'text-blue-400 hover:text-blue-500' : 'text-blue-600 hover:text-blue-700'}
          `}
        >
          <ArrowUpRight size={16} />
          Live Demo
        </a>
      </div>
    </div>
  );

  return (
    <>
      <div
        id="proyectos"
        className={`
          relative min-h-screen overflow-hidden flex flex-col justify-center items-center
          transition-opacity duration-500 ease-in-out scroll-mt-20 pb-20 md:pt-28
        `}
      >
        <div
          className={`
            absolute inset-0 bg-gradient-to-bl from-cyan-800 via-blue-900 to-rose-900
            transition-opacity duration-500 ease-in-out
            ${isDark ? 'opacity-100' : 'opacity-0'}
          `}
        />
        <div
          className={`
            absolute inset-0 bg-gradient-to-bl from-green-200 via-blue-200 to-pink-100
            transition-opacity duration-500 ease-in-out
            ${isDark ? 'opacity-0' : 'opacity-100'}
          `}
        />

        <main className="relative z-10 w-full max-w-6xl px-4 sm:px-4 md:px-4">
          <section className="space-y-6">
            <h2
              className={`
                text-2xl font-bold mb-6 px-2 sm:px-0 transition-colors duration-500 ease-in-out
                ${isDark ? 'text-white' : 'text-gray-800'}
              `}
            >
              Proyectos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
              {projectsData.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </section>
        </main>
      </div>

      {isModalOpen && selectedProject && (
        // Eliminamos el onClick del contenedor principal para 
        // que no se cierre al hacer clic fuera del modal
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
        // Nota: Al quitar onClick aquí, el modal ya no cierra 
        // al hacer clic fuera. Se cierra únicamente con la X.
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-75 overflow-hidden"
            style={{ overflow: 'hidden' }}
          />

          <div
            className={`
              relative w-full max-w-4xl mx-4 shadow-xl rounded-lg overflow-hidden
              ${isDark ? 'bg-gray-900' : 'bg-white/90 backdrop-blur-sm'}
            `}
          // onClick={(e) => e.stopPropagation()} // ya no es necesario
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className={`
                absolute top-2 right-2 z-10 p-2 rounded-full
                ${isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-800'
                }
                transition-colors
              `}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-video">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              <button
                onClick={previousImage}
                className={`
                  absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                  ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-800'
                  }
                  transition-colors
                `}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                  ${isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-800'
                  }
                  transition-colors
                `}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`
                      w-2 h-2 rounded-full transition-colors
                      ${index === currentImageIndex
                        ? (isDark ? 'bg-gray-100' : 'bg-gray-100')
                        : (isDark ? 'bg-gray-800' : 'bg-gray-800')
                      }
                    `}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                overflow: hidden;
              }
            `
          }}
        />
      )}
    </>
  );
};

export default Proyects;
