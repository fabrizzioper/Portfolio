// src/components/Proyects.js
import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const Proyects = ({ isDark }) => {
  // 1. Seis proyectos de ejemplo
  const projectsData = [
    {
      title: "Project A",
      description: "Descripción breve del proyecto A.",
      technologies: ["React", "Tailwind", "Node.js"],
      githubUrl: "https://github.com/user/proyectoA",
      liveUrl: "https://proyectoA.com",
      // Ejemplo de imagen aleatoria de Unsplash
      imageUrl: "https://source.unsplash.com/random/600x400?sig=1"
    },
    {
      title: "Project B",
      description: "Descripción breve del proyecto B.",
      technologies: ["Angular", "Firebase", "SCSS"],
      githubUrl: "https://github.com/user/proyectoB",
      liveUrl: "https://proyectoB.com",
      imageUrl: "https://source.unsplash.com/random/600x400?sig=2"
    },
    {
      title: "Project C",
      description: "Descripción breve del proyecto C.",
      technologies: ["Vue", "Tailwind", "Express"],
      githubUrl: "https://github.com/user/proyectoC",
      liveUrl: "https://proyectoC.com",
      imageUrl: "https://source.unsplash.com/random/600x400?sig=3"
    },
    {
      title: "Project D",
      description: "Descripción breve del proyecto D.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/user/proyectoD",
      liveUrl: "https://proyectoD.com",
      imageUrl: "https://source.unsplash.com/random/600x400?sig=4"
    },
    {
      title: "Project E",
      description: "Descripción breve del proyecto E.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/user/proyectoE",
      liveUrl: "https://proyectoE.com",
      imageUrl: "https://source.unsplash.com/random/600x400?sig=5"
    },
    {
      title: "Project F",
      description: "Descripción breve del proyecto F.",
      technologies: ["React Native", "Expo", "Firebase"],
      githubUrl: "https://github.com/user/proyectoF",
      liveUrl: "https://proyectoF.com",
      imageUrl: "https://source.unsplash.com/random/600x400?sig=6"
    }
  ];

  // 2. Definimos la tarjeta (card) localmente
  const ProjectCard = ({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    imageUrl
  }) => {
    return (
      <div className="group relative w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 p-4">
        {/* Imagen con altura reducida */}
        <div className="relative w-full h-40 overflow-hidden rounded-md">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Contenido */}
        <div className="space-y-4 mt-4">
          {/* Título con línea decorativa */}
          <div className="relative">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              {title}
              <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform origin-left group-hover:scale-x-150 transition-transform duration-300" />
            </h3>
          </div>
          
          {/* Descripción */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Tecnologías en chips */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-50 rounded-full border border-gray-100 hover:border-blue-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Botones Code y Live Demo */}
          <div className="flex gap-4 pt-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={18} className="group-hover/btn:rotate-12 transition-transform duration-200" />
              <span>Code</span>
            </a>
            
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  // 3. Renderizamos todo en el componente principal
  return (
    <div
      id="proyectos"
      className={`
        relative min-h-screen
        flex flex-col
        justify-center
        items-center
        overflow-hidden
        transition-opacity
        duration-500
        ease-in-out
        scroll-mt-24
        pb-8
        md:pt-24
      `}
    >
      {/* Gradiente Oscuro */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-bl
          from-cyan-800 via-blue-900 to-rose-900
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `}
      />
      {/* Gradiente Claro */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-bl
          from-green-200 via-blue-200 to-pink-100
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `}
      />

      <main className="relative z-10 w-full max-w-6xl px-4 sm:px-4 md:px-4 mx-auto">
        <section className="space-y-6">
          {/* Título */}
          <h2
            className={`
              text-2xl font-bold mb-6 px-2 sm:px-0
              transition-colors duration-500 ease-in-out
              ${isDark ? 'text-white' : 'text-gray-800'}
            `}
          >
            Proyectos
          </h2>

          {/* Subtítulo */}
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`
                text-xl sm:text-2xl md:text-3xl 
                font-semibold 
                text-center 
                mb-12 
                ${isDark ? 'text-white' : 'text-gray-800'}
              `}
            >
              hola soy un nuevo componente
            </h1>
          </div>

          {/* Grid de 1 col (móvil), 2 col (md), 3 col (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <ProjectCard
                key={idx}
                {...project}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Proyects;
