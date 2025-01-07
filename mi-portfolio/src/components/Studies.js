import React, { useState } from 'react';
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
      className="h-full draggable-item"
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
      className={`
        draggable-item
        shadow-none
        flex flex-col items-center gap-3 p-6 rounded-xl
        cursor-move
        /* 1) Unificamos la transición */
        transition-all duration-500 ease-in-out
        /* Fondo transparente con hover suave */
        ${isDark
          ? 'bg-transparent hover:bg-white/20 text-white'
          : 'bg-transparent hover:bg-blue-200/80 text-gray-800'}
      `}
    >
      <i className={`${icon} ${size || 'text-4xl'} ${color}`}></i>
      <span
        className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-800'}`}
      >
        {name}
      </span>
    </div>
  );
};

const TechCard = ({ title, icon, items, onItemsReorder, isDark }) => {
  // 1) Creamos los hooks (fuera de cualquier if)
  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });
  // 2) Para escritorio
  const desktopSensors = useSensors(pointerSensor, keyboardSensor);
  // 3) Para móvil
  const mobileSensors = useSensors();
  // 4) Elegimos según sea móvil o no
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
    <div
      className={`
        rounded-3xl p-10 cursor-move flex flex-col h-full
        backdrop-blur-sm
        /* 2) Unificamos la transición en la tarjeta */
        transition-all duration-500 ease-in-out
        hover:shadow-2xl hover:shadow-blue-500/40
        /* Fondo y colores según modo */
        ${isDark
          ? 'bg-gray-900/50 text-white hover:bg-gray-800/50'
          : 'bg-white/40 text-gray-800 hover:bg-white/60'}
      `}
    >
      <h3
        className={`
          text-xl font-semibold mb-6 flex items-center gap-3
          transition-colors duration-500 ease-in-out
          ${isDark ? 'text-white' : 'text-gray-800'}
        `}
      >
        <i className={`${icon} ${isDark ? 'text-white' : 'text-gray-800'}`} />
        {title}
      </h3>
      <DndContext
        sensors={sensorsToUse}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-3 gap-6">
            {items.map((item) => (
              <SortableTechItem
                key={item.id}
                id={item.id}
                {...item}
                isDark={isDark}
              />
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
      title: 'Universidad Nacional de Madrid',
      period: '2018 - 2022',
      degree: 'Ingeniería en Sistemas Computacionales',
      tags: ['Desarrollo Web', 'Sistemas'],
      icon: 'fas fa-university',
    },
    {
      id: 'edu-2',
      title: 'Instituto Tecnológico de Barcelona',
      period: '2022 - 2023',
      degree: 'Máster en Desarrollo Full Stack',
      tags: ['Full Stack', 'Cloud'],
      icon: 'fas fa-graduation-cap',
    },
  ]);

  const [techData, setTechData] = useState([
    {
      id: 'tech-1',
      title: 'Frontend',
      icon: 'fas fa-code',
      items: [
        {
          id: 'frontend-1',
          name: 'React',
          icon: 'fab fa-react',
          color: 'text-blue-400',
        },
        {
          id: 'frontend-2',
          name: 'Tailwind',
          icon: 'fab fa-css3',
          color: 'text-teal-400',
        },
        {
          id: 'frontend-3',
          name: 'Bootstrap',
          icon: 'fab fa-bootstrap',
          color: 'text-purple-400',
        },
      ],
    },
    {
      id: 'tech-2',
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
      id: 'tech-3',
      title: 'Frameworks',
      icon: 'fas fa-cubes',
      items: [
        {
          id: 'framework-1',
          name: 'Spring Boot',
          icon: 'fas fa-leaf',
          color: 'text-green-400',
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
          name: 'PostgreSQL',
          icon: 'fas fa-database',
          color: 'text-green-400',
          size: 'text-3xl',
        },
        {
          id: 'db-2',
          name: 'MySQL',
          icon: 'fas fa-database',
          color: 'text-orange-400',
          size: 'text-3xl',
        },
      ],
    },
  ]);

  // Para “Educación” también
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
    <div className="relative min-h-screen overflow-hidden">
      {/* Capa de Gradiente Oscuro */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-bl from-purple-950 via-blue-950 to-green-950
          /* 3) Suavizamos la transición del gradiente oscuro */
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-100' : 'opacity-0'}
        `}
      />
      {/* Capa de Gradiente Claro */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-bl from-purple-200 via-blue-200 to-yellow-100
          /* 4) Suavizamos la transición del gradiente claro */
          transition-opacity duration-500 ease-in-out
          ${isDark ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Contenido Principal */}
      <main
        className="
          relative z-10
          container max-w-7xl mx-auto
          px-8 sm:px-4 md:px-4
          space-y-12
          pb-16 md:pb-24
        "
      >
        {/* Sección Educación */}
        <section className="space-y-8">
          <h2
            className={`
              text-4xl font-bold mb-12
              transition-colors duration-500 ease-in-out
              ${isDark ? 'text-white' : 'text-gray-800'}
            `}
          >
            Educación
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {educationData.map((item) => (
                  <SortableCard key={item.id} id={item.id}>
                    <div
                      className={`
                        rounded-3xl p-10 cursor-move flex flex-col h-full
                        backdrop-blur-sm
                        /* 5) Unificamos la transición en las tarjetas de educación */
                        transition-all duration-500 ease-in-out
                        hover:shadow-2xl hover:shadow-blue-500/40
                        ${isDark
                          ? 'bg-gray-900/50 text-white hover:bg-gray-800/50'
                          : 'bg-white/40 text-gray-800 hover:bg-white/60'}
                      `}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3
                            className={`
                              text-xl font-semibold
                              transition-colors duration-500 ease-in-out
                              ${isDark ? 'text-white' : 'text-gray-800'}
                            `}
                          >
                            {item.title}
                          </h3>
                          <p
                            className={`
                              mt-2
                              transition-colors duration-500 ease-in-out
                              ${isDark ? 'text-gray-300' : 'text-gray-600'}
                            `}
                          >
                            {item.period}
                          </p>
                        </div>
                        <div
                          className={`
                            w-12 h-12 rounded-md flex items-center justify-center
                            transition-colors duration-500 ease-in-out
                            ${isDark ? 'bg-gray-800' : 'bg-gray-100'}
                          `}
                        >
                          <i
                            className={`
                              ${item.icon}
                              text-xl
                              transition-colors duration-500 ease-in-out
                              ${isDark ? 'text-white' : 'text-gray-800'}
                            `}
                          />
                        </div>
                      </div>
                      <p
                        className={`
                          mt-4
                          transition-colors duration-500 ease-in-out
                          ${isDark ? 'text-gray-300' : 'text-gray-600'}
                        `}
                      >
                        {item.degree}
                      </p>
                      <div className="mt-4 flex gap-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`
                              px-3 py-1 rounded-md text-sm
                              transition-colors duration-500 ease-in-out
                              ${isDark
                                ? 'bg-blue-900/50 text-blue-200'
                                : 'bg-blue-50 text-blue-600'
                              }
                            `}
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
        <section className="space-y-8">
          <h2
            className={`
              text-4xl font-bold mb-12
              transition-colors duration-500 ease-in-out
              ${isDark ? 'text-white' : 'text-gray-800'}
            `}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
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
  );
};

export default Studies;
