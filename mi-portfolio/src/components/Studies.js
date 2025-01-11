// src/components/Studies.js
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ReactComponent as MysqlIcon } from '../assets/icons/mysql.svg'; // Updated import path
import { ReactComponent as FlaskIcon } from '../assets/icons/flask.svg'; // Updated import path
import { ReactComponent as Mongodb } from '../assets/icons/mongodb.svg'; // Updated import path
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  horizontalListSortingStrategy,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Detectar móvil (simple)
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  typeof navigator !== 'undefined' ? navigator.userAgent : ''
);

const SortableCard = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="draggable-item"
    >
      {children}
    </div>
  );
};

const SortableTechItem = ({ id, icon, name, size, color, isDark }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`draggable-item shadow-none flex flex-col items-center gap-2 p-3 rounded-xl cursor-move transition-all duration-500 ease-in-out ${isDark ? 'bg-transparent hover:bg-white/20 text-white' : 'bg-transparent hover:bg-blue-200/80 text-gray-800'}`}
    >
      {/* Renderizar el ícono */}
      {React.isValidElement(icon) ? (
        icon // Renderiza el ícono si es un elemento React válido
      ) : (
        <i className={`${icon} ${size || 'text-2xl'} ${color}`} />
      )}
      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{name}</span>
    </div>
  );
};

const TechCard = ({ title, icon, items, onItemsReorder, isDark }) => {
  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const desktopSensors = useSensors(pointerSensor, keyboardSensor);
  const mobileSensors = useSensors();
  const sensorsToUse = isMobile ? mobileSensors : desktopSensors;

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      onItemsReorder(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className={`rounded-2xl p-6 flex flex-col h-full backdrop-blur-sm transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-500/40 ${isDark ? 'bg-gray-900/50 text-white hover:bg-gray-800/50' : 'bg-white/40 text-gray-800 hover:bg-white/60'} h-full 2xl:max-h-60 2xl:p-4`}>
      <h3 className={`text-base font-semibold mb-3 flex items-center gap-2 transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`}>
        {React.isValidElement(icon) ? icon : <i className={`${icon} ${isDark ? 'text-white' : 'text-gray-800'}`} />}
        {title}
      </h3>
      <DndContext sensors={sensorsToUse} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items.map((item) => item.id)} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-3 gap-3">
            {items.map((item) => (
              <SortableTechItem key={item.id} id={item.id} {...item} isDark={isDark} />
            ))}



          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

const Studies = ({ isDark }) => {
  const [educationData, setEducationData] = useState([
    {
      id: 'edu-1',
      title: 'UPC - Universidad Perurana de Ciencias Aplicadas',
      period: 'Marzo 2022 – En curso',
      degree: 'Ingeniería en Software',
      tags: ['Desarrollo de Software', 'Gestión de Proyectos'],
      icon: 'fas fa-university',
    },
    {
      id: 'edu-2',
      title: 'ICPNA',
      period: 'Junio 2023 – Octubre 2024',
      degree: 'Inglés',
      tags: ['Intermedio B1'],
      icon: 'fas fa-graduation-cap',
    },
    {
      id: 'edu-3',
      title: 'Udemy',
      period: 'Enero 2025',
      degree: 'Universidad Java - Cero a Experto - Actualizado (+150 hrs)',
      tags: ['Java', 'Java Script', 'Servlets', 'Hibernate', 'Spring Boot', 'Jakarta EE'],
      icon: 'fas fa-graduation-cap',
    },
  ]);

  const [techData, setTechData] = useState([
    {
      id: 'tech-1',
      title: 'Frontend',
      icon: 'fas fa-code', // Icono Font Awesome
      items: [
        {
          id: 'frontend-1',
          name: 'HTML',
          icon: 'fab fa-html5', // Icono Font Awesome
          color: 'text-orange-500',
        },
        {
          id: 'frontend-2',
          name: 'CSS',
          icon: 'fab fa-css3', // Icono Font Awesome
          color: 'text-blue-500',
        },
        {
          id: 'frontend-3',
          name: 'JavaScript',
          icon: 'fab fa-js', // Icono Font Awesome
          color: 'text-yellow-400',
        },
        {
          id: 'frontend-4',
          name: 'Tailwind',
          icon: 'fab fa-css3', // Icono Font Awesome
          color: 'text-teal-400',
        },
        {
          id: 'frontend-5',
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap', // Icono Font Awesome
          color: 'text-purple-400',
        },
      ],
    },
    {
      id: 'tech-2',
      title: 'Frameworks',
      icon: 'fas fa-cubes', // Icono Font Awesome
      items: [
        {
          id: 'framework-1',
          name: 'React',
          icon: 'fab fa-react', // Icono Font Awesome
          color: 'text-blue-400',
        },
        {
          id: 'framework-2',
          name: 'Spring Boot',
          icon: 'fas fa-leaf', // Icono Font Awesome
          color: 'text-green-400',
        },
        {
          id: 'framework-3',
          name: 'Angular',
          icon: 'fab fa-angular', // Icono Font Awesome
          color: 'text-red-500',
        },
        {
          id: 'framework-4',
          name: 'Flask',
          icon: <FlaskIcon className="w-8 h-8 text-gray-500" />, // SVG Personalizado
          color: 'text-gray-500',
        },
      ],
    },
    {
      id: 'tech-3',
      title: 'Backend',
      icon: 'fas fa-server',
      items: [
        {
          id: 'backend-1',
          name: 'Java',
          icon: 'fab fa-java',
          color: 'text-orange-400',
        },
        {
          id: 'backend-2',
          name: 'Python',
          icon: 'fab fa-python',
          color: 'text-blue-400',
        },
      ],
    },

    {
      id: 'tech-4',
      title: 'Bases de Datos',
      icon: 'fas fa-database',
      items: [
        {
          id: 'db-1',
          name: 'SQL Server',
          icon: 'fas fa-database',
          color: 'text-green-400',
          size: 'text-2xl', // Ajustado a text-2xl
        },
        {
          id: 'db-2',
          name: 'MySQL',
          icon: <MysqlIcon className="w-8 h-8 text-blue-500 scale-150" />
        }, {
          id: 'db-3',
          name: 'MongoDB',
          icon: <Mongodb className="w-8 h-8 text-green-500" />, // SVG de react-icons
        },


      ],
    },
  ]);

  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  const desktopSensors = useSensors(pointerSensor, keyboardSensor);
  const mobileSensors = useSensors();
  const sensorsToUse = isMobile ? mobileSensors : desktopSensors;

  const handleDragEnd = (event, items, setItems) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleTechItemsReorder = (techId, newItems) => {
    setTechData((prevData) =>
      prevData.map((tech) =>
        tech.id === techId ? { ...tech, items: newItems } : tech
      )
    );
  };

  return (
    <>
      {/* Contenedor que abarca toda la pantalla */}
      <div
        id="competencias"
        className={`relative min-h-screen overflow-hidden flex flex-col justify-center items-center transition-opacity duration-500 ease-in-out scroll-mt-24 pb-8 md:pt-24`}
      >
        {/* Capa de Gradiente Oscuro */}
        <div
          className={`absolute inset-0 bg-gradient-to-bl from-purple-950 via-blue-950 to-green-950 transition-opacity duration-500 ease-in-out ${isDark ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Capa de Gradiente Claro */}
        <div
          className={`absolute inset-0 bg-gradient-to-bl from-purple-200 via-blue-200 to-yellow-100 transition-opacity duration-500 ease-in-out ${isDark ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Contenido Principal, centrado */}
        <main className="relative z-10 w-full max-w-6xl px-4 sm:px-4 md:px-4">
          {/* Sección Educación */}
          <section className="space-y-6">
            <h2
              className={`text-2xl font-bold mb-6 px-2 sm:px-0 transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              Educación y certificados
            </h2>
            <DndContext
              sensors={sensorsToUse}
              collisionDetection={closestCenter}
              onDragEnd={(event) => handleDragEnd(event, educationData, setEducationData)}
            >
              <SortableContext
                items={educationData.map((item) => item.id)}
                strategy={horizontalListSortingStrategy}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                  {educationData.map((item) => (
                    <SortableCard key={item.id} id={item.id}>
                      <div
                        className={`rounded-2xl p-6 flex flex-col h-full backdrop-blur-sm transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-500/40 ${isDark ? 'bg-gray-900/50 text-white hover:bg-gray-800/50' : 'bg-white/40 text-gray-800 hover:bg-white/60'} h-full 2xl:max-h-60 2xl:p-4`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3
                              className={`text-base font-semibold transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`}
                            >
                              {item.title}
                            </h3>
                            <p
                              className={`mt-1 transition-colors duration-500 ease-in-out ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                              {item.period}
                            </p>
                          </div>
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center`}>
                            <i className={`${item.icon} text-base transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`} />
                          </div>
                        </div>
                        <p className={`mt-2 transition-colors duration-500 ease-in-out ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.degree}
                        </p>
                        <div className="mt-2 flex gap-1 flex-wrap">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`px-2 py-1 rounded-md text-xs transition-colors duration-500 ease-in-out ${isDark ? 'bg-blue-900/50 text-blue-200' : 'bg-blue-50 text-blue-600'}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </SortableCard>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </section>

          {/* Sección Tecnologías */}
          <section className="space-y-6 mt-8">
            <h2
              className={`text-2xl font-bold mb-6 px-2 sm:px-0 transition-colors duration-500 ease-in-out ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              Tecnologías
            </h2>
            <DndContext
              sensors={sensorsToUse}
              collisionDetection={closestCenter}
              onDragEnd={(event) => handleDragEnd(event, techData, setTechData)}
            >
              <SortableContext
                items={techData.map((item) => item.id)}
                strategy={horizontalListSortingStrategy}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch perspective-1000">
                  {techData.map((item) => (
                    <SortableCard key={item.id} id={item.id}>
                      <TechCard
                        {...item}
                        isDark={isDark}
                        onItemsReorder={(newItems) => handleTechItemsReorder(item.id, newItems)}
                      />
                    </SortableCard>
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          </section>
        </main>
      </div>
    </>
  );
};

export default Studies;
