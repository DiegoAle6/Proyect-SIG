import React from 'react';
import '../css/calendario.css'; 

class Calendario extends React.Component {
  render() {
    
    const tareasMarcadas = [
      { fecha: 5, tarea: "Pasar Informe" },
      { fecha: 10, tarea: "Preparar reunión" },
      { fecha: 15, tarea: "Ir a la universidad" },
      { fecha: 20, tarea: "Enviar correo electrónico" },
    ];

    const tareas = [
      "Pasar Informe",
      "Preparar reunión",
      "Ir a la universidad",
      "Enviar correo electrónico",
    ];

    return (
      <div className="calendario">
        <div className="header">
        </div>
        <div className="contenedor-seccion">
          <div className="mis-tareas">
            <h2>Mis tareas</h2>
            <ul>
              {tareas.map((tarea, index) => (
                <li key={index}><span className="tarea-importante">{tarea}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="contenedor-seccion">
          <div className="mes">
            <div className="dias-mes">
          
              {Array.from({ length: 30 }, (_, index) => {
                const dia = index + 1;
                const tarea = tareasMarcadas.find(item => item.fecha === dia);
                return (
                  <div key={dia} className={`dia ${tarea ? 'con-tarea' : ''}`}>
                    <span className="numero-dia">{dia}</span>
                    {tarea && <div className="tarea">{tarea.tarea}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendario;