// import React, { useState } from 'react';
// import {
//   DndContext,
//   closestCenter,
//   KeyboardSensor,
//   PointerSensor,
//   TouchSensor,
//   useSensor,
//   useSensors,
// } from '@dnd-kit/core';
// import {
//   arrayMove,
//   SortableContext,
//   sortableKeyboardCoordinates,
//   useSortable,
//   horizontalListSortingStrategy,
//   rectSortingStrategy,
// } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';

// const SortableCard = ({ id, children }) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       {children}
//     </div>
//   );
// };

// const SortableTechItem = ({ id, icon, name, size, color }) => {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//   } = useSortable({ id });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="shadow-lg flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 hover:bg-blue-500/10 transition-all duration-300 cursor-move"
//     >
//       <i className={`${icon} ${size || 'text-4xl'} ${color}`}></i>
//       <span className="text-sm text-gray-800">{name}</span>
//     </div>
//   );
// };

// const EducationCard = ({ title, period, degree, tags, icon }) => (
//   <div className="bg-white shadow-lg rounded-3xl p-10 transition-all hover:shadow-2xl duration-300 hover:shadow-blue-500/40 cursor-move">
//     <div className="flex justify-between items-start">
//       <div>
//         <h3 className="text-xl font-semibold text-gray-800">
//           {title}
//         </h3>
//         <p className="text-custom mt-2">{period}</p>
//       </div>
//       <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
//         <i className={`${icon} text-custom text-xl`}></i>
//       </div>
//     </div>
//     <p className="mt-4 text-gray-600">{degree}</p>
//     <div className="mt-4 flex gap-2">
//       {tags.map((tag, index) => (
//         <span key={index} className="px-3 py-1 bg-blue-50 text-custom rounded-md text-sm">
//           {tag}
//         </span>
//       ))}
//     </div>
//   </div>
// );

// const TechCard = ({ title, icon, items, onItemsReorder }) => {
//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(TouchSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       const oldIndex = items.findIndex(item => item.id === active.id);
//       const newIndex = items.findIndex(item => item.id === over.id);
//       onItemsReorder(arrayMove(items, oldIndex, newIndex));
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-3xl p-10 transition-all hover:shadow-2xl duration-300 hover:shadow-blue-500/40 cursor-move">
//       <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
//         <i className={`${icon} text-gray-800`}></i>
//         {title}
//       </h3>
//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragEnd={handleDragEnd}
//       >
//         <SortableContext
//           items={items.map(item => item.id)}
//           strategy={rectSortingStrategy}
//         >
//           <div className="grid grid-cols-3 gap-6">
//             {items.map((item) => (
//               <SortableTechItem
//                 key={item.id}
//                 id={item.id}
//                 {...item}
//               />
//             ))}
//           </div>
//         </SortableContext>
//       </DndContext>
//     </div>
//   );
// };

// const Portfolio = () => {
//   const [educationData, setEducationData] = useState([
//     {
//       id: 'edu-1',
//       title: "Universidad Nacional de Madrid",
//       period: "2018 - 2022",
//       degree: "Ingeniería en Sistemas Computacionales",
//       tags: ["Desarrollo Web", "Sistemas"],
//       icon: "fas fa-university"
//     },
//     {
//       id: 'edu-2',
//       title: "Instituto Tecnológico de Barcelona",
//       period: "2022 - 2023",
//       degree: "Máster en Desarrollo Full Stack",
//       tags: ["Full Stack", "Cloud"],
//       icon: "fas fa-graduation-cap"
//     }
//   ]);

//   const [techData, setTechData] = useState([
//     {
//       id: 'tech-1',
//       title: "Frontend",
//       icon: "fas fa-code",
//       items: [
//         { id: 'frontend-1', name: "React", icon: "fab fa-react", color: "text-blue-400" },
//         { id: 'frontend-2', name: "Tailwind", icon: "fab fa-css3", color: "text-teal-400" },
//         { id: 'frontend-3', name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-400" }
//       ]
//     },
//     {
//       id: 'tech-2',
//       title: "Backend",
//       icon: "fas fa-server",
//       items: [
//         { id: 'backend-1', name: "Java", icon: "fab fa-java", color: "text-orange-400" },
//         { id: 'backend-2', name: "Python", icon: "fab fa-python", color: "text-blue-400" }
//       ]
//     },
//     {
//       id: 'tech-3',
//       title: "Frameworks",
//       icon: "fas fa-cubes",
//       items: [
//         { id: 'framework-1', name: "Spring Boot", icon: "fas fa-leaf", color: "text-green-400" }
//       ]
//     },
//     {
//       id: 'tech-4',
//       title: "Bases de Datos",
//       icon: "fas fa-database",
//       items: [
//         { id: 'db-1', name: "PostgreSQL", icon: "fas fa-database", color: "text-green-400", size: "text-3xl" },
//         { id: 'db-2', name: "MySQL", icon: "fas fa-database", color: "text-orange-400", size: "text-3xl" }
//       ]
//     }
//   ]);

//   const sensors = useSensors(
//     useSensor(PointerSensor),
//     useSensor(KeyboardSensor, {
//       coordinateGetter: sortableKeyboardCoordinates,
//     })
//   );

//   const handleDragEnd = (event, items, setItems) => {
//     const { active, over } = event;
//     if (active.id !== over.id) {
//       const oldIndex = items.findIndex(item => item.id === active.id);
//       const newIndex = items.findIndex(item => item.id === over.id);
//       setItems(arrayMove(items, oldIndex, newIndex));
//     }
//   };

//   const handleTechItemsReorder = (techId, newItems) => {
//     setTechData(prevData => 
//       prevData.map(tech => 
//         tech.id === techId 
//           ? { ...tech, items: newItems }
//           : tech
//       )
//     );
//   };

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-24 space-y-24">
//       <section className="space-y-8">
//         <h2 className="text-4xl font-bold mb-12 text-gray-800">Educación</h2>
//         <DndContext
//           sensors={sensors}
//           collisionDetection={closestCenter}
//           onDragEnd={(event) => handleDragEnd(event, educationData, setEducationData)}
//         >
//           <SortableContext
//             items={educationData.map(item => item.id)}
//             strategy={horizontalListSortingStrategy}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {educationData.map((item) => (
//                 <SortableCard key={item.id} id={item.id}>
//                   <EducationCard {...item} />
//                 </SortableCard>
//               ))}
//             </div>
//           </SortableContext>
//         </DndContext>
//       </section>

//       <section className="space-y-8">
//         <h2 className="text-4xl font-bold mb-12 text-gray-800">Tecnologías</h2>
//         <DndContext
//           sensors={sensors}
//           collisionDetection={closestCenter}
//           onDragEnd={(event) => handleDragEnd(event, techData, setTechData)}
//         >
//           <SortableContext
//             items={techData.map(item => item.id)}
//             strategy={horizontalListSortingStrategy}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
//               {techData.map((item) => (
//                 <SortableCard key={item.id} id={item.id}>
//                   <TechCard 
//                     {...item} 
//                     onItemsReorder={(newItems) => handleTechItemsReorder(item.id, newItems)}
//                   />
//                 </SortableCard>
//               ))}
//             </div>
//           </SortableContext>
//         </DndContext>
//       </section>
//     </main>
//   );
// };

// export default Portfolio;


import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
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

// ===================================================
// SortableCard: Contenedor arrastrable
// ===================================================
const SortableCard = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

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
      // Para permitir que el hijo (EducationCard o TechCard) se expanda
      className="h-full"
    >
      {children}
    </div>
  );
};

// ===================================================
// SortableTechItem: Ítems arrastrables dentro de TechCard
// ===================================================
const SortableTechItem = ({ id, icon, name, size, color }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

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
      className="shadow-lg flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 hover:bg-blue-500/10 transition-all duration-300 cursor-move"
    >
      <i className={`${icon} ${size || 'text-4xl'} ${color}`}></i>
      <span className="text-sm text-gray-800">{name}</span>
    </div>
  );
};

// ===================================================
// EducationCard: Tarjeta para la sección de Educación
// ===================================================
const EducationCard = ({ title, period, degree, tags, icon }) => (
  <div
    className="
      bg-white shadow-lg rounded-3xl p-10 transition-all
      hover:shadow-2xl duration-300 hover:shadow-blue-500/40
      cursor-move flex flex-col h-full
    "
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-custom mt-2">{period}</p>
      </div>
      <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
        <i className={`${icon} text-custom text-xl`}></i>
      </div>
    </div>
    <p className="mt-4 text-gray-600">{degree}</p>
    <div className="mt-4 flex gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-50 text-custom rounded-md text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// ===================================================
// TechCard: Tarjeta para la sección de Tecnologías
// ===================================================
const TechCard = ({ title, icon, items, onItemsReorder }) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);
      onItemsReorder(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div
      className="
        bg-white shadow-lg rounded-3xl p-10 transition-all
        hover:shadow-2xl duration-300 hover:shadow-blue-500/40
        cursor-move flex flex-col h-full
      "
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-gray-800">
        <i className={`${icon} text-gray-800`}></i>
        {title}
      </h3>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(item => item.id)}
          strategy={rectSortingStrategy}
        >
          <div className="grid grid-cols-3 gap-6">
            {items.map((item) => (
              <SortableTechItem
                key={item.id}
                id={item.id}
                {...item}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

// ===================================================
// Portfolio: Componente principal
// ===================================================
const Portfolio = () => {
  const [educationData, setEducationData] = useState([
    {
      id: 'edu-1',
      title: "Universidad Nacional de Madrid",
      period: "2018 - 2022",
      degree: "Ingeniería en Sistemas Computacionales",
      tags: ["Desarrollo Web", "Sistemas"],
      icon: "fas fa-university"
    },
    {
      id: 'edu-2',
      title: "Instituto Tecnológico de Barcelona",
      period: "2022 - 2023",
      degree: "Máster en Desarrollo Full Stack",
      tags: ["Full Stack", "Cloud"],
      icon: "fas fa-graduation-cap"
    }
  ]);

  const [techData, setTechData] = useState([
    {
      id: 'tech-1',
      title: "Frontend",
      icon: "fas fa-code",
      items: [
        { id: 'frontend-1', name: "React", icon: "fab fa-react", color: "text-blue-400" },
        { id: 'frontend-2', name: "Tailwind", icon: "fab fa-css3", color: "text-teal-400" },
        { id: 'frontend-3', name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-purple-400" }
      ]
    },
    {
      id: 'tech-2',
      title: "Backend",
      icon: "fas fa-server",
      items: [
        { id: 'backend-1', name: "Java", icon: "fab fa-java", color: "text-orange-400" },
        { id: 'backend-2', name: "Python", icon: "fab fa-python", color: "text-blue-400" }
      ]
    },
    {
      id: 'tech-3',
      title: "Frameworks",
      icon: "fas fa-cubes",
      items: [
        { id: 'framework-1', name: "Spring Boot", icon: "fas fa-leaf", color: "text-green-400" }
      ]
    },
    {
      id: 'tech-4',
      title: "Bases de Datos",
      icon: "fas fa-database",
      items: [
        {
          id: 'db-1',
          name: "PostgreSQL",
          icon: "fas fa-database",
          color: "text-green-400",
          size: "text-3xl"
        },
        {
          id: 'db-2',
          name: "MySQL",
          icon: "fas fa-database",
          color: "text-orange-400",
          size: "text-3xl"
        }
      ]
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Reordenamiento para las secciones
  const handleDragEnd = (event, items, setItems) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  // Reordenamiento de ítems dentro de cada TechCard
  const handleTechItemsReorder = (techId, newItems) => {
    setTechData(prevData =>
      prevData.map(tech =>
        tech.id === techId
          ? { ...tech, items: newItems }
          : tech
      )
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-24 space-y-24">
      {/* ===================================== */}
      {/* Sección EDUCACIÓN - con items-stretch */}
      {/* ===================================== */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Educación</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, educationData, setEducationData)}
        >
          <SortableContext
            items={educationData.map(item => item.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {educationData.map(item => (
                <SortableCard key={item.id} id={item.id}>
                  <EducationCard {...item} />
                </SortableCard>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>

      {/* ===================================== */}
      {/* Sección TECNOLOGÍAS - con items-stretch */}
      {/* ===================================== */}
      <section className="space-y-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Tecnologías</h2>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, techData, setTechData)}
        >
          <SortableContext
            items={techData.map(item => item.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
              {techData.map(item => (
                <SortableCard key={item.id} id={item.id}>
                  <TechCard
                    {...item}
                    onItemsReorder={(newItems) => handleTechItemsReorder(item.id, newItems)}
                  />
                </SortableCard>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </section>
    </main>
  );
};

export default Portfolio;
