import React from 'react';
import './App.css';
import ProjectDetailsPage from '../src/pages/detalle-proyecto'; 
import FormPage from '../src/pages/editar-proyecto'; 
import Docs_alumno from './pages/docs-alumno';
import Calendario from './pages/calendario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar los componentes necesarios

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Proyect" element={<FormPage />} />
        <Route path="/Detalles" element={<ProjectDetailsPage />} />
        <Route path="/DocsAlum" element={<Docs_alumno />} /> {/* Corregido a Docs_alumno y sin espacio al final */}
        <Route path="/Calendario" element={<Calendario />} /> {/* Corregido a Docs_alumno y sin espacio al final */}
      </Routes>
    </Router>
  );
}

export default App;
