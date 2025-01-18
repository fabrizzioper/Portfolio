// src/components/Proyects.js
import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const Proyects = ({ isDark }) => {
  // 6 proyectos de ejemplo
  const projectsData = [
    {
      title: "Project A",
      description: "Descripción breve del proyecto A.",
      technologies: ["React", "Tailwind", "Node.js"],
      githubUrl: "https://github.com/user/proyectoA",
      liveUrl: "https://proyectoA.com",
      imageUrl: "https://picsum.photos/600/400?random=1"
    },
    {
      title: "Project B",
      description: "Descripción breve del proyecto B.",
      technologies: ["Angular", "Firebase", "SCSS"],
      githubUrl: "https://github.com/user/proyectoB",
      liveUrl: "https://proyectoB.com",
      imageUrl: "https://picsum.photos/600/400?random=2"
    },
    {
      title: "Project C",
      description: "Descripción breve del proyecto C.",
      technologies: ["Vue", "Tailwind", "Express"],
      githubUrl: "https://github.com/user/proyectoC",
      liveUrl: "https://proyectoC.com",
      imageUrl: "https://picsum.photos/600/400?random=3"
    },
    {
      title: "Project D",
      description: "Descripción breve del proyecto D.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/user/proyectoD",
      liveUrl: "https://proyectoD.com",
      imageUrl: "https://picsum.photos/600/400?random=4"
    },
    {
      title: "Project E",
      description: "Descripción breve del proyecto E.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/user/proyectoE",
      liveUrl: "https://proyectoE.com",
      imageUrl: "https://picsum.photos/600/400?random=5"
    },
    {
      title: "Project F",
      description: "Descripción breve del proyecto F.",
      technologies: ["React Native", "Expo", "Firebase"],
      githubUrl: "https://github.com/user/proyectoF",
      liveUrl: "https://proyectoF.com",
      imageUrl: "https://picsum.photos/600/400?random=6"
    },
  ];

  // Card con estilos heredados de Studies y ajustes solicitados
  const ProjectCard = ({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    imageUrl
  }) => (
    <div
      className={`
        rounded-2xl p-6 flex flex-col backdrop-blur-sm
        transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-500/40
        ${isDark ? 'bg-gray-900/50 text-white hover:bg-gray-800/50' : 'bg-white/40 text-gray-800 hover:bg-white/60'}
        2xl:p-4
        min-h-[450px]  /* Aumentamos la altura mínima */
      `}
    >
      {/* Imagen con más altura */}
      <div className="w-full h-60 md:h-72 overflow-hidden rounded-md mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Título */}
      <h3
        className={`
          text-base font-semibold mb-2 transition-colors duration-500 ease-in-out
          ${isDark ? 'text-white' : 'text-gray-800'}
        `}
      >
        {title}
      </h3>

      {/* Descripción */}
      <p
        className={`
          text-sm leading-relaxed transition-colors duration-500 ease-in-out mb-4
          ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}
      >
        {description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-6">
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

      {/* Botones centrados */}
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
    <div
      id="proyectos"
      className={`
        relative min-h-screen overflow-hidden
        flex flex-col justify-center items-center
        transition-opacity duration-500 ease-in-out
        scroll-mt-20 pb-8 md:pt-28
      `}
    >
      {/* Gradiente oscuro (igual que en Studies) */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-bl
          from-cyan-800 via-blue-900 to-rose-900
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `}
      />
      {/* Gradiente claro (igual que en Studies) */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-bl
          from-green-200 via-blue-200 to-pink-100
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `}
      />

      <main className="relative z-10 w-full max-w-6xl px-4 sm:px-4 md:px-4">
        <section className="space-y-6">
          {/* Título principal */}
          <h2
            className={`
              text-2xl font-bold mb-6 px-2 sm:px-0
              transition-colors duration-500 ease-in-out
              ${isDark ? 'text-white' : 'text-gray-800'}
            `}
          >
            Proyectos
          </h2>

          {/* Grid: 1 columna en móvil, 2 en md, 3 en lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projectsData.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Proyects;
