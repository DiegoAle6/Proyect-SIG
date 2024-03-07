import React, { useState } from 'react';
// import '../App.css'; // Asegúrate de importar tu archivo de estilos CSS


const ProjectDetailsPage = () => {
    // Estados para los campos del formulario
    const [company] = useState("Amazon");
    const [advisor] = useState('María García');
    const [projectTitle] = useState('Desarrollo de Aplicación de Gestión de Proyectos');
    const [career] = useState('Ingeniería Informática en Desarrollo de Software');
    const [startDate] = useState('2023-09-20');
    const [endDate] = useState('2024-03-15');
    const [objectives] = useState('Crear una aplicación de gestión de proyectos que permita a los usuarios planificar, asignar tareas y hacer un seguimiento del progreso.');
    const [problemStatement] = useState('La empresa XYZ necesita mejorar su proceso de gestión de proyectos, ya que actualmente se basa en documentos y hojas de cálculo dispersas.');
    const [justification] = useState('La implementación de una aplicación de gestión de proyectos mejorará la eficiencia, la colaboración y la organización dentro de la empresa, lo que conducirá a una mejor entrega de proyectos y una mayor satisfacción del cliente.');
    const [activities] = useState('1. Investigación de las necesidades de los usuarios.\n2. Diseño de la interfaz de usuario.\n3. Desarrollo de la aplicación utilizando tecnologías modernas.\n4. Pruebas y depuración.\n5. Implementación y formación del personal.');
  
    // Estado para la matrícula del estudiante
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
<>
<style>
        {`
        .centered-box {
          width: 900px; /* Tamaño aproximado del recuadro */
          background-color: #f2f2f2; /* Color gris de fondo */
          border-radius: 10px; /* Bordes redondeados */
          padding: 20px; /* Espaciado interno */
          margin: 0 auto; /* Centrar horizontalmente */
        }
        `}
      </style>

    <div className="centered-box">

    <div className="container mx-auto p-8">
    

    
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          
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

        </>

  );
};


export default ProjectDetailsPage;
