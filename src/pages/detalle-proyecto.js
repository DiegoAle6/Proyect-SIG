import React, { useState } from 'react';

const ProjectDetailsPage = () => {
  // Estados para los campos del formulario
  const [company] = useState("McDonald's");
  const [advisor] = useState('Luis Fernando Viñafana');
  const [projectTitle] = useState('E-commerce Avanzado con Nexus y SAP B');
  const [career] = useState('TSU en TI en Área de Desarrollo en SW');
  const [startDate] = useState('2024-05-13');
  const [endDate] = useState('2024-08-13');
  const [objectives] = useState('Desarrollar e implementar una solución de e-commerce para modernizar, la plataforma en línea. Mejorar la experiencia del usuario.');
  const [problemStatement] = useState('Equipo Hotel, es una empresa dedicada a la venta de productos de cocina para hoteles, enfrenta el desafío de renovar su antiguo sitio web desarrollado en WordPress. Se necesita de un sitio más dinámico y funcional para mejorar la interacción con sus clientes y sus ventas.');
  const [justification] = useState('El objetivo de este proyecto es modernizar y optimizar la plataforma online de “Equipo Hotel”, empresa de venta de productos de cocina hotelera. Se utilizarán tecnologías modernas como Nexus y la API de SAP Business One. Estas tecnologías son importantes por varias razones, y los beneficios son considerables tanto para la empresa como para sus clientes.');
  const [activities] = useState('');
  // Añadido: Estado para la matrícula del estudiante
  const [studentId, setStudentId] = useState('');

  // Función para manejar la búsqueda por matrícula
  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log('Buscar estudiante con matrícula:', studentId);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-6 uppercase text-center text-blue-900">DETALLES DEL PROYECTO</h1>
          <div className="mb-6">
            <div className="mb-4">
              <label htmlFor="student-id" className="block text-subtitle text-sm font-bold mb-2">
                Ingresa la Matrícula del Estudiante Colaborador
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="student-id"
                  value={studentId}
                  onChange={e => setStudentId(e.target.value)}
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full mr-2"
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  BUSCAR
                </button>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Detalles Del Proyecto:</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company-name" className="block text-subtitle text-sm font-bold mb-2">Empresa</label>
              <input type="text" id="company-name" value={company} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="advisor-name" className="block text-subtitle text-sm font-bold mb-2">Asesor</label>
              <input type="text" id="advisor-name" value={advisor} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="project-title" className="block text-subtitle text-sm font-bold mb-2">Título del Proyecto</label>
              <input type="text" id="project-title" value={projectTitle} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="career" className="block text-subtitle text-sm font-bold mb-2">Carrera</label>
              <input type="text" id="career" value={career} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="start-date" className="block text-subtitle text-sm font-bold mb-2">Inicio</label>
              <input type="date" id="start-date" value={startDate} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="end-date" className="block text-subtitle text-sm font-bold mb-2">Fin</label>
              <input type="date" id="end-date" value={endDate} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="objectives" className="block text-subtitle text-sm font-bold mb-2">1. Objetivo General del Proyecto.</label>
              <textarea id="objectives" value={objectives} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="problem-statement" className="block text-subtitle text-sm font-bold mb-2">2. Planteamiento del Problema:</label>
              <textarea id="problem-statement" value={problemStatement} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="justification" className="block text-subtitle text-sm font-bold mb-2">3. Justificación</label>
              <textarea id="justification" value={justification} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
            <div>
              <label htmlFor="activities" className="block text-subtitle text-sm font-bold mb-2">4. Actividades a realizar</label>
              <textarea id="activities" value={activities} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
