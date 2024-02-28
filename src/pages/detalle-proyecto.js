import React, { useState } from 'react';
import '../App.css'; // Asegúrate de importar tu archivo de estilos CSS


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


    <div className="centered-box">

    <div className="container mx-auto p-8">
    

    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h1 className="block text-4xl font-bold mb-2  uppercase text-blue-900">EDICIÓN DEL ANTE-PROYECTO</h1>
          <div className="mb-4">
            <label htmlFor="student-id" className="block text-subtitle text-sm font-bold mb-2">
              Ingresa la Matricula del Estudiante Colaborador
            </label>
            <div className="flex">
              <input
                type="text"
                id="student-id"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                className="shadow appearance-none border rounded py-2 px-3 text-gray-700 
                           leading-tight focus:outline-none focus:shadow-outline w-1/2 mr-2"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="save-button"
              >
                BUSCAR
              </button>
            </div>
          </div>
          <h1 className="block text-2xl font-bold mb-2 text-center text-blue-900">Detalles Del Proyecto:</h1>

          <label htmlFor="company-name" className="block text-subtitle text-sm font-bold mb-2">Empresa</label>
          <input type="text" id="company-name" value={company} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="advisor-name" className="block text-subtitle text-sm font-bold mb-2">Asesor</label>
          <input type="text" id="advisor-name" value={advisor} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="project-title" className="block text-subtitle text-sm font-bold mb-2">Título del Proyecto</label>
          <input type="text" id="project-title" value={projectTitle} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="career" className="block text-subtitle text-sm font-bold mb-2">Carrera</label>
          <input type="text" id="career" value={career} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="start-date" className="block text-subtitle text-sm font-bold mb-2">Inicio</label>
          <input type="date" id="start-date" value={startDate} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="end-date" className="block text-subtitle text-sm font-bold mb-2">Fin</label>
          <input type="date" id="end-date" value={endDate} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="objectives" className="block text-subtitle text-sm font-bold mb-2">1. Objetivo General del Proyecto.</label>
          <textarea id="objectives" value={objectives} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="problem-statement" className="block text-subtitle text-sm font-bold mb-2">2. Planteamiento del Problema:</label>
          <textarea id="problem-statement" value={problemStatement} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
          
          <label htmlFor="justification" className="block text-subtitle text-sm font-bold mb-2">3. Justificación</label>
          <textarea id="justification" value={justification} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <label htmlFor="activities" className="block text-subtitle text-sm font-bold mb-2">4. Actividades a realizar</label>
          <textarea id="activities" value={activities} readOnly className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

        </div>
      </form>
    </div>
        </div>

  );
};


export default ProjectDetailsPage;
