import React, { useState } from 'react';

const FormPage = () => {
  // Estados para los campos del formulario
  const [company, setCompany] = useState("McDonald's");
  const [advisor, setAdvisor] = useState('Luis Fernando Viñafana');
  const [projectTitle, setProjectTitle] = useState('E-commerce Avanzado con Nexus y SAP B');
  const [career, setCareer] = useState('TSU en TI en Área de Desarrollo en SW');
  const [startDate, setStartDate] = useState('2024-05-13');
  const [endDate, setEndDate] = useState('2024-08-13');
  const [objectives, setObjectives] = useState('Desarrollar e implementar una solución de e-commerce para modernizar, la plataforma en línea. Mejorar la experiencia del usuario.');
  const [problemStatement, setProblemStatement] = useState('Equipo Hotel, es una empresa dedicada a la venta de productos de cocina para hoteles, enfrenta el desafío de renovar su antiguo sitio web desarrollado en WordPress. Se necesita de un sitio más dinámico y funcional para mejorar la interacción con sus clientes y sus ventas.');
  const [justification, setJustification] = useState('El objetivo de este proyecto es modernizar y optimizar la plataforma online de “Equipo Hotel”, empresa de venta de productos de cocina hotelera. Se utilizarán tecnologías modernas como Nexus y la API de SAP Business One. Estas tecnologías son importantes por varias razones, y los beneficios son considerables tanto para la empresa como para sus clientes.');
  const [activities, setActivities] = useState('');
  // Añadido: Estado para la matrícula del estudiante
  const [studentId, setStudentId] = useState('');

  // Función para manejar la búsqueda por matrícula
  const handleSearch = () => {
    // Lógica de búsqueda aquí
    console.log('Buscar estudiante con matrícula:', studentId);
  };
  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío aquí
    console.log('Formulario enviado', {
      company,
      advisor,
      projectTitle,
      career,
      startDate,
      endDate,
      objectives,
      problemStatement,
      justification,
      activities
    });
  };

  // Función para manejar la eliminación
  const handleDelete = () => {
    // Lógica de eliminación aquí
    console.log('Proyecto eliminado');
  };

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="block text-gray-700 text-lg font-bold mb-2">Edición del ante-proyecto</h1>
          <div className="mb-4">
            <label htmlFor="student-id" className="block text-gray-700 text-sm font-bold mb-2">
              Ingresa la Matricula del Estudiante Colaborador
            </label>
            <div className="flex">
              <input
                type="text"
                id="student-id"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                BUSCAR
              </button>
            </div>
          </div>

          <label htmlFor="company-name" className="block text-gray-700 text-sm font-bold mb-2">Empresa</label>
          <input type="text" id="company-name" value={company} onChange={e => setCompany(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="advisor-name" className="block text-gray-700 text-sm font-bold mb-2">Asesor</label>
          <input type="text" id="advisor-name" value={advisor} onChange={e => setAdvisor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="project-title" className="block text-gray-700 text-sm font-bold mb-2">Título del Proyecto</label>
          <input type="text" id="project-title" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="career" className="block text-gray-700 text-sm font-bold mb-2">Carrera</label>
          <input type="text" id="career" value={career} onChange={e => setCareer(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="start-date" className="block text-gray-700 text-sm font-bold mb-2">Inicio</label>
          <input type="date" id="start-date" value={startDate} onChange={e => setStartDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="end-date" className="block text-gray-700 text-sm font-bold mb-2">Fin</label>
          <input type="date" id="end-date" value={endDate} onChange={e => setEndDate(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="objectives" className="block text-gray-700 text-sm font-bold mb-2">1. Objetivo General del Proyecto.</label>
          <textarea id="objectives" value={objectives} onChange={e => setObjectives(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="problem-statement" className="block text-gray-700 text-sm font-bold mb-2">2. Planteamiento del Problema:</label>
          <textarea id="problem-statement" value={problemStatement} onChange={e => setProblemStatement(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="justification" className="block text-gray-700 text-sm font-bold mb-2">3. Justificación</label>
          <textarea id="justification" value={justification} onChange={e => setJustification(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="activities" className="block text-gray-700 text-sm font-bold mb-2">4. Actividades a realizar</label>
          <textarea id="activities" value={activities} onChange={e => setActivities(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <div className="flex items-center justify-between mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</button>
            <button type="button" onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
